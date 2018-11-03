'use strict'

const Card = use('App/Models/Card');

const { cardF } = use('App/Utils/ModelFilter');

class CardController {


    async index({ response, auth }) {
        
        const company = await auth.getUser();

        const cards = await Card.find({ company: company._id }, cardF);

        response.status(200).send(cards);
    }

    async store({ request, response, auth }) {

        const company = await auth.getUser();

        let { name, goal, convertion } = request.all();

        const card = await Card.create({ name, goal, convertion, company });

        response.status(201).send(card);

    }
}

module.exports = CardController
