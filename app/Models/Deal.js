'use strict'

const BaseModel = use('MongooseModel')
const { Schema } = use('mongoose');
class Deal extends BaseModel {
  static boot({ schema }) {
    this.index({ company: 1 }, { background: true });
  }

  static get schema() {
    return {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      goodies: {
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

module.exports = Deal.buildModel('Deal')
