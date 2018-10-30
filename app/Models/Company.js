'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

const validator = use('App/Validators/Company');

class Company extends BaseModel {
  static boot({ schema }) {
    
  }

  static get schema() {
    return {
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
      username:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
      },
      password: {
        type: String,
        required: true,
        minLength: 8,
      },
      name: {
        type: String,
        required: true,
      },
      address: [{
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required: true,
        unique: true,
      }],
      cpnj: {
        type: String,
        unique: true,
        required: true,
      },
      cards: [{
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: true,
        unique: true,
      }],
    }
  }
}

module.exports = Company.buildModel('Company')
