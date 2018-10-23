'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

class FillCard extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      stamp: {
        type: Number,
        min: 0,
        default: 0,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      card: {
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: true,
      },
      active: {
        type: Schema.Types.Boolean,
        default: true,
      }
    }
  }
}

module.exports = Stamp.buildModel('FillCard')
