'use strict'

const BaseModel = use('MongooseModel')
const { Schema } = use('mongoose');

class Subcategory extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      name: {
        type: String,
        unique: true,
        required: true,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        unique: true,
        required: true,
      }

    }
  }
}

module.exports = Subcategory.buildModel('Subcategory')
