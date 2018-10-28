'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

const validator = use('App/Validators/User');

class User extends BaseModel {
  static boot({ schema }) {
    this.addHook('preSave', 'UserHook.hashPassword');
  
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
        minLength: 3,
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
        minLength: 8,
      },
      birth: {
        type: Date,
        required: true,
      },
      fillCards: [{
        type: Schema.Types.ObjectId,
        unique: true,
        ref: 'FillCard'
      }],
      goodies: {
        type: Number,
        default: 0,
        min: 0,
      }
    }
  }
}

module.exports = User.buildModel('User')
