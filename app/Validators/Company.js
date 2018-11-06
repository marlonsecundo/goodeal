'use strict'

const { validate } = use('Validator');

class Company {

    async validateArray (array) {

        return array.length > 0;

    }

}

module.exports = new Company()
