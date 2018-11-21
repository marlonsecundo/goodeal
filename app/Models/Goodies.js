'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

class Goodies extends BaseModel {
  static boot({ schema }) {
    this.index({ card: 1 }, { unique: true });
  }

  static get schema() {
    return {
      value: {
        type: Number,
        min: 0,
        default: 0,
      },
      card: {
        type: Schema.Types.ObjectId,
        ref: 'Card',
        required: true,
      },
    }
  }
}

module.exports = Goodies.buildModel('Goodies')
