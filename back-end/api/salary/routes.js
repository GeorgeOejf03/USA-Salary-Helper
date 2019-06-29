'use strict';

const { controllers, schema } = require('nodearch').deps.salary;
const { SalaryController } = controllers;

module.exports = [
  {
    method: 'GET',
    path: '/salary',
    handler: SalaryController.getSpendings,
    config: {
      tags: ['api'],
      validate: schema.SalarySchema
    }
  },

  {
    method: 'GET',
    path: '/data',
    handler: SalaryController.getData,
    config: {
      tags: ['api']
    }
  }
];
