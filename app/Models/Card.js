'use strict'

const BaseModel = use('MongooseModel')
const { Schema } = use('mongoose');

class Card extends BaseModel {

  static boot({ schema }) {
    this.index({ name: 1, company: 1 }, { unique: true, backgroud: true });

  }

  static get schema() {
    return {
      name: {
        type: String,
        required: true,
      },
      goal: {
        type: Number,
        required: true,
        min: 0,
      },
      convertion: {
        type: Number,
        required: true,
      },
      company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
      }

    }
  }
}

module.exports = Card.buildModel('Card');
