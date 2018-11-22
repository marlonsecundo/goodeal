'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

const validator = use('App/Validators/Company');

class Company extends BaseModel {
  static boot({ schema }) {

    this.addHook('preSave', 'CompanyHook.hashPassword');
    this.index({ cpnj: 1 }, { background: true });
  }


  static get schema() {
    return {
      cpnj: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      addresses: {
        type: [{
          type: Schema.Types.ObjectId,
          ref: 'Address',
          required: true,
          unique: true,
        }],
        validate: {
          isAsync: true,
          validator: validator.validateArray,
          message: 'Address is empty'
        }
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
