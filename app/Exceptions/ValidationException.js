'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ValidationException extends LogicalException {

  handle(error, { response }) {
    response.status(200).send(error.message);
  }
  
}

module.exports = ValidationException
