'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AuthException extends LogicalException {
  
  handle(error, { response }) {
    response.status(500).send('Some message')
  }

}

module.exports = AuthException
