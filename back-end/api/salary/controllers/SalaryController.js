"use strict";

const nodearch = require('nodearch');
const { services } = nodearch.deps.salary;
const { SalaryService } = services;

const _ = require('lodash');

module.exports = {

  getSpendings: async function(request) {
    try {
      const { query } = request;

      query.Recalculated = 'Submit+to+Recalculate';
      query.displayCurrency = 'USD';

      const costs = await SalaryService.getCostOfLiving(query);
      const taxes = await SalaryService.getTaxes(query);
      const totalTaxes = SalaryService.sumTaxes(taxes);

      return SalaryService.divideValues(costs, totalTaxes, query.additionalPayments, query.pay_rate);
    } catch(e) {
      console.log(e.stack);
      throw new Error('un handled')
    }
  },

  getData: async function(request) {
    return nodearch.deps.salary.data;
  }
};
