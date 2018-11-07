'use strict'

const Company = use('App/Models/Company');
const Address = use('App/Models/Address');
const Card = use('App/Models/Card');

const { companyF, addressF, cardF } = use('App/Utils/ModelFilter');

class CompanyController {

    async index({ response, auth }) {

        let { cpnj } = await auth.getUser();

        let company = await Company.findOne({ cpnj }, companyF)
            .populate('addresses', addressF)
            .populate('cards', cardF);

        response.status(200).send(company);
    }

    async update() {

    }

    async destroy() {

    }

    async test({ response, auth }) {

        let add = await Address.create({ street: 'dfsf', number: 5, neighborhood: 'bairro acola', cep: '59255000', city: 5 });

        let company = await Company.create({ cpnj: '111886', name: 'goodeal', password: '123', addresses: [add.id] });

        response.status(201).send(company);

    }
}

module.exports = CompanyController