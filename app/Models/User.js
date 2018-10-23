'use strict'

const BaseModel = use('MongooseModel')
const { Schema } = use('Mongoose');

class User extends BaseModel {
  static boot({ schema }) {
  
  }

  static get schema() {
    return {
      name: {
        type: String,
        required: true,
      },
      cpf: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      birth: {
        type: Date,
        required: true,
      },
      fillCards: [{
        type: Schema.Types.ObjectId,
        unique: true,
        ref: 'FillCard'
      }],
      goodies: {
        type: Number,
        default: 0,
        min: 0,
      }
    }
  }
}

module.exports = User.buildModel('User')
