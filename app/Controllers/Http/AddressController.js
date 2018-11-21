'use strict'

const https = use('https');

const Address = use('App/Models/Address');

class AddressController {

    async create(address) {

        let { street, complement, neighborhood, number } = address;

        let address = await Address.create({ street, complement, neighborhood, number });

        return address;
    }
}

module.exports = AddressController
