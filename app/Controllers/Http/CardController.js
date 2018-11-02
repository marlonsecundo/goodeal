'use strict'

const Card = use('App/Models/Card');
const Company = use('App/Models/Company');

class CardController {


    async index({ response, auth }) {

        const company = await auth.getUser();
    }

    async store({ request, response, auth }) {

        let { name, goal, convertion, company } = request.all();

        const card = await Card.create({ name, goal, convertion, company });

        

        response.status(201).send(card);

    }
}

module.exports = CardController
