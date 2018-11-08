'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

const ValidationException = use('App/Exceptions/ValidationException');

class ExceptionHandler extends BaseExceptionHandler {

  async handle(error, { request, response }) {

    if (error.code == 'E_INVALID_JWT_TOKEN') return response.status(error.status).send(error.message);

    if (error.name == 'ValidationError') return new ValidationException().handle(error, { request, response });

    error.handle(error, { request, response });

  }


  async report(error, { request }) {

  }
}

module.exports = ExceptionHandler
