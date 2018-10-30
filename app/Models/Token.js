'use strict'

const { Schema } = use('mongoose');
const TokenMongoose = use('AdonisMongoose/Src/Token')


class Token extends TokenMongoose {

  static expires() {
    return 5
  }

  static get schema() {
    return {
      uid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      expires: {
        type: Date,
        default: () => utils.nowAddDays(this.expires())
      }
    }
  }
}

module.exports = Token.buildModel('Token')
