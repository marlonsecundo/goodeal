'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {

  authenticator: 'user',

  user: {
    serializer: 'mongoose',
    model: 'App/Models/User',
    token: 'App/Models/Token',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY')
    }
  },

  
  company: {
    serializer: 'mongoose',
    model: 'App/Models/Company',
    token: 'App/Models/Token',
    scheme: 'jwt',
    uid: 'cpnj',
    password: 'password',
    options: {
      secret: Env.get('APP_KEY')
    }
  },
  
}
