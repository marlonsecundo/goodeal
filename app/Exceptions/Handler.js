'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

const ValidationException = use('App/Exceptions/ValidationException');

class ExceptionHandler extends BaseExceptionHandler {

  async handle(error, { request, response }) {

    if (['E_INVALID_JWT_TOKEN', 'E_ROUTE_NOT_FOUND'].includes(error.code)) return response.status(error.status).send(error.message);

    else if (error.name == 'ValidationError') return new ValidationException().handle(error, { request, response });

    error.handle(error, { request, response });

  }


  async report(error, { request }) {

  }
}

module.exports = ExceptionHandler
