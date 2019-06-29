'use strict';

const _ = require('lodash');

const parseError = function (error, messages) {
  return _.map(error.details, function (i) {
    if(_.isArray(i.path)) {
      i.path = _.join(i.path, '.');
    }

    const err = {
      key: i.path.split('.').pop(),
      path: i.path,
      message: i.message.replace(/"/g, ''),
      type: i.type.split('.').shift(),
      constraint: i.type.split('.').pop()
    };

    // if label is different than key, provide label
    if(i.context.key !== err.key) {
      err.label = i.context.key;
    }

    // set custom message (if exists)
    if(messages.hasOwnProperty(err.path)) {
      err.message = messages[err.path];
    }
    else if(messages.hasOwnProperty(err.key)) {
      err.message = messages[err.key];
    }

    return err;
  });
};

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  routes: {
    cors: true,
    validate: {
      failAction: async (request, h, err) => {
        const errors = parseError(err, err.output.payload.message);
        err.output.payload.validation.errors = errors;
        throw err;
      },
      options: { abortEarly: false }
    }
  }
};