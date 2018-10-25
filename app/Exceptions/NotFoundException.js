'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class NotFoundException extends LogicalException {
  
  handle(error, { response }) {
    response.status(404).send('Link not found')
  }
}

module.exports = NotFoundException
