'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AuthenticationException extends LogicalException {
  
  handle(error, { response }) {
    response.status(500).send('Some message')
  }

}

module.exports = AuthenticationException
