'use strict'

const AddressController = use('App/Controllers/Http/AddressController');

const Company = use('App/Models/Company');
const Address = use('App/Models/Address');
const Card = use('App/Models/Card');

const { companyF, addressF, cardF } = use('App/Utils/ModelFilter');

class CompanyController {


    async update({ request, response, auth }) {

        const options = { new: true, runValidators: true, fields: companyF };

        let { _id } = await auth.getUser();

        let { name } = request.all();

        let company = await Company.findOneAndUpdate(_id, { name, birth, cpf }, options);

        response.status(200).send(company);
    }

    async store({ request, response, auth }) {

        let company = await Company.create({
            cpnj: '111886', name: 'goodeal', password: '123',
            addresses: [{ street: 'Rua Legal', number: 14, neighborhood: 'Bairro Novo', cep: '59255000', complement: 'pow', city: 'SA' }]
        });

        response.status(201).send(company);
    }
}

module.exports = CompanyController