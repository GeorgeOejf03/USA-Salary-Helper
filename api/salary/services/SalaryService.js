'use strict';

const fetch = require('node-fetch');
const cheerio = require('cheerio');
const _ = require('lodash');
const qs = require('querystring');
const request = require("request-promise-native");
const nodearch = require('nodearch');

const { taxee, costOfLiving } = nodearch.config;

const toNearest2Decimal = function (num) {
  return Math.round(num * 100) / 100;
}

module.exports = {
  getCostOfLiving: async function (query) {
    const { city } = query;
    const colQuery = _.omit(_.cloneDeep(query), ['pay_rate', 'city', 'state', 'additionalPayments']);

    const response = await fetch(`${costOfLiving.url}/${city}?${qs.stringify(colQuery)}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const html = await response.text();

    const $ = cheerio.load(html);

    const rows = $(`${costOfLiving.htmlElementPath}`)
      .map(
        (i, el) => $(el).children().map(
          (i, el) => $(el).text().trim()
        ).toArray()
      )
      .toArray();

    const filteredRows = _.compact(rows);

    const costs = [];

    for (let i = 0; i < filteredRows.length; i += 2) {
      const costI = filteredRows[i + 1];
      const costF = costI.split(' ')[0];
      const costV = costF.replace(/\,/g, '');
      const actualCost = parseFloat(costV);
      costs.push({ item: filteredRows[i], cost: actualCost });
    };

    return costs;
  },

  getTaxes: async function (query) {
    const options = {
      method: 'POST',
      url: `${taxee.url}`,
      headers: taxee.headers,
      body: { filing_status: 'single', pay_rate: query.pay_rate, state: query.state },
      json: true
    };

    return await request.post(options);
  },

  sumTaxes: function (taxes) {
    return (taxes.annual.state.amount ? taxes.annual.state.amount + taxes.annual.federal.amount : taxes.annual.federal.amount);
  },

  divideValues: function (costs, totalTaxes, additionalPayments, payRate) {
    const dividedCosts = [];

    const pureSpendingsObject = _.last(costs);
    const pureSpendingsPerMonth = pureSpendingsObject.cost;
    const totalSpentPerMonth = toNearest2Decimal(pureSpendingsPerMonth + additionalPayments);
    const totalSpentPerYear = totalSpentPerMonth * 12;
    const incomeAfterTaxes = payRate - totalTaxes;
    const totalSavingsPerYear = toNearest2Decimal(incomeAfterTaxes - totalSpentPerYear);
    const totalSavingsPerMonth = toNearest2Decimal(totalSavingsPerYear / 12);

    costs.length = costs.length - 1;
    costs.push({ item: "Additional payments", cost: additionalPayments });
    costs.push({
      item: "Total spendings per month",
      cost: totalSpentPerMonth,
      details: [
        {
        item: "Monthly spendings on food/transportation ..etc", 
        cost: pureSpendingsPerMonth
      }, 
      {
        item: "Additional payments as entered by user",
        cost: additionalPayments
      }]
    });

    costs.push({ item: "Total spent per year", cost: totalSpentPerYear });
    costs.push({ item: "Taxes per year (without FICA)", cost: totalTaxes });
    costs.push({ item: "Income after taxes per year", cost: incomeAfterTaxes });

    let subElement;

    _.forEach(costs, (data) => {
      if (!_.endsWith(data.item, '=')) {
        if (subElement) dividedCosts.push(subElement);

        subElement = {};
        subElement.name = data.item;
        subElement.totalCost = data.cost;
        subElement.details = data.details || [];

      } else {
        subElement.details.push(data);
      }
    });

    dividedCosts.push(subElement);

    return { dividedCosts, totalSavingsPerMonth, totalSavingsPerYear };
  }
}