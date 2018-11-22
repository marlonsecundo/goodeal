'use strict'

const Card = use('App/Models/Card');

const { cardF, companyF } = use('App/Utils/ModelFilter');

class CardController {

    async index({ response }) {

        const cards = await Card.find();

        response.status(200).send(cards);
    }

    async store({ request, response }) {

        const { companies_id } = request.params;

        let data = request.only(['name', 'goal', 'convertion']);

        const card = await Card.create({ companies_id, ...data });

        company.cards = [...company.cards, card._id];

        await company.save();

        response.status(201).send(card);
    }

    async show({ request, response }) {

        const { companies_id, id } = request.params;

        const card = await Card.findOne({ _id: id, company: companies_id }, cardF).populate('company', companyF);

        response.status(200).send(card);
    }

    async update({ request, response }) {

        const options = { new: true, runValidators: true, fields: cardF };

        const { companies_id, id } = request.params;

        const data = request.only(['name']);

        const card = await Card.findOneAndUpdate({ companies_id, id }, data, options);

        response.status(200).send(card);
    }

    async destroy({ request, response }) {
        /* Analisar */
    }


}

module.exports = CardController
