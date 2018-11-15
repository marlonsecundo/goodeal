'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

class Goodies extends BaseModel {
  static boot({ schema }) {
    this.index({ user: 1, card: 1 }, { unique: true });
  }

  static get schema() {
    return {
      value: {
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
    }
  }
}

module.exports = FillCard.buildModel('Goodies')