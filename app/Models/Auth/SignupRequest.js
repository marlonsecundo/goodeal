'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

const validator = use('App/Validators/User');

class SignupRequest extends BaseModel {
  static boot({ schema }) {

    this.index({ 'created_at': 1 }, { expireAfterSeconds: 30 });
    this.addHook('preSave', 'SignupRequestHook.checkDuplicateUser');

  }

  static get schema() {
    return {
      name: {
        type: String,
        required: true,
      },
      username:{
        type: String,
        required: true,
        unique: true,
      },
      cpf: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          isAsync: true,
          validator: validator.validateEmail,
          message: 'Invalid Email',
        }
      },
      password: {
        type: String,
        required: true,
      },
      birth: {
        type: Date,
        required: true,
      },
      token: {
        type: String,
        required: true,
        unique: true,
      }
    }
  }
}

module.exports = SignupRequest.buildModel('SingupRequest')
