'use strict';

const joi = require('joi');
const nodearch = require('nodearch');
const _ = require('lodash');

const getJoiValues = function(schemaData) {
  return _.mapValues(schemaData, (schema) => {
    const sampleElement = _.head(schema);
    if(_.isObject(sampleElement)) return _.map(schema, (schemaData) => { return schemaData.value });
    else return schema;
  })
};

const schemaData = nodearch.deps.salary.data;
const joiValues = getJoiValues(schemaData);

module.exports = {
  query: joi.object({
    members: joi.number().required().description('Number Of Members'),
    restaurants_percentage: joi.number().required().valid(joiValues.restaurantsPercentages).description('Eating lunch or dinner in restaurants percentage'),
    inexpensive_restaurants_percentage: joi.number().required().valid(joiValues.inexpensiveRestaurantsPercentages).description('When eating in restaurants you are chosing inexpensive restaurants percentage'),
    drinking_coffee_outside: joi.number().valid(joiValues.coffeeValues).required().description('Drinking Coffee outside of your home. Values by descending are A lot, High, Moderate, Low, None'),
    going_out_monthly: joi.number().required().valid(joiValues.goingOutValues).description('Going out (cinema, night life, etc.) Values are None, wice per month per household member, three times per month per household member, once per week per household member, twice per week per household member,3-4 times per week per household member'),
    smoking_packs_per_day: joi.number().required().min(0.0).max(100.0).description('Smoking (household overall) packs of cigarettes per day'),
    alcoholic_drinks: joi.number().required().valid(joiValues.alcholicValues).description('Alcoholic beverages (consume). Values are None, Low, Moderate, A lot'),
    type_of_food: joi.number().required().valid(joiValues.foodTypes).description('Wester is 0, Asian is 1'),
    driving_car: joi.number().required().valid(joiValues.carTypes).description('Driving car. Values are None, Low, Moderate, A Lot'),
    taxi_consumption: joi.number().required().valid(joiValues.taxiTypes).description('Taking Taxi. Values are None, One round trip per Month, One round trip per Month, Two round trips per Week, Daily one round trip'),
    paying_for_public_transport: joi.string().required().valid(joiValues.publicTransportTypes).description('Paying for public transport tickets'),
    sport_memberships: joi.number().required().valid(joiValues.sportMembershipTypes).description('Sport Memberships. Values are None, 1 Household Member, 2 Household Members, All Household Members'),
    vacation: joi.number().required().valid(joiValues.vacationTypes).description('Vacation and Travel. Values are None, Once per year (one week each), relatevely inexpensive, Twice per year (one week each), relatevely inexpensive, Once per year (one week each), relatevely expensive, Two per year (one week each), relatevely expensive, Three per year (one week each), relatevely expensive'),
    clothing_and_shoes: joi.number().required().valid(joiValues.clothingTypes).description('Buying Clothing and Shoes. Values are Low, Moderate, A lot'),
    rent: joi.string().required().valid(joiValues.rentTypes).description('Rent: 26 -> Apartment (1 bedroom) in City Centre, 27 -> Apartment (1 bedroom) Outside of Centre, 28 -> Apartment (3 bedrooms) in City Centre, 29 -> Apartment (3 bedrooms) Outside of Centre, mortgage1 -> Mortgage for 1 bedroom apartment (approximate), mortgage3 -> Mortgage for 3 bedroom apartment (approximate)'),
    kindergarten_count: joi.number().required().min(0).default(0).description('Number of your children going to the kindergarten'),
    private_schools_count: joi.number().required().min(0).default(0).description('Number of your children going to the private school'),
    pay_rate: joi.number().required().description('Salary per year'),
    additionalPayments: joi.number().required().description('Additional Payments inluding loans'),
    city: joi.string().required().description('City you will be living in'),
    state: joi.string().required().valid(joiValues.states).description('State you will be living in')
  }).required()
}