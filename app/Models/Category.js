'use strict'

const BaseModel = use('MongooseModel')

class Category extends BaseModel {
  static boot ({ schema }) {

  }

  static get schema () {

    return {
      name: {
        type: String,
        required: true,
      }
    }

  }
}

module.exports = Category.buildModel('Category')
