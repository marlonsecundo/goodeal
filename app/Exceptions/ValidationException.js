'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ValidationException extends LogicalException {

  handle(error, { response }) {
    response.status(404).send('Some message')
  }
  
}

module.exports = ValidationException
