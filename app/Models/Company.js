'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

class Company extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
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
