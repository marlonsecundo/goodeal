'use strict'

const BaseModel = use('MongooseModel')
const { Schema } = use('mongoose');
class Purchases extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      card: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
      },
      address: {
        type: Schema.Types.ObjectId,
        ref: 'Address',
        required: true,
      },
      datetime: {
        type: Date,
        required: true,
        unique: true,
      }
    }
  }
}

module.exports = Purchases.buildModel('Purchases')
