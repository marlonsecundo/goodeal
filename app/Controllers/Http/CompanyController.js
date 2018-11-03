'use strict'

const Company = use('App/Models/Company');
const Address = use('App/Models/Address');

const { companyF, addressF } = use('App/Utils/ModelFilter');

class CompanyController {

    async index({ response, auth }) {

        let { cpnj } = await auth.getUser();

        let company = await Company.findOne({ cpnj }, companyF).populate('address', addressF);

        response.status(200).send(company);
    }

    async update({ response, auth }) {

    }

    async destroy({ response, auth }) {

    }

    async test({ response, auth }) {

        let add = await Address.create({ street: 'dfsf', number: 5, neighborhood: 'bairro acola', cep: '59255000', city: 5 });

        let company = await Company.create({ cpnj: '111886', name: 'goodeal', password: '123', address: [add.id] });

    }
}

module.exports = CompanyController