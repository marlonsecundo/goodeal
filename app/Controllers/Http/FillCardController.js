'use strict'

const FillCard = use('App/Models/FillCard');
const Card = use('App/Models/Card');

const { fillCardF, cardF } = use('App/Utils/ModelFilter');

class FillCardController {

    async index({ response, auth }) {

        let user = await auth.getUser();

        const fillCards = await FillCard.find({ user }, fillCardF).populate('card', cardF);

        response.status(200).send(fillCards);
    }

    async store({ request, response, auth }) {

        let { card } = request.all();

        let user = await auth.getUser();

        const fillCard = await FillCard.create({ card, user });

        user.fillCards = [...user.fillCards, fillCard._id];

        await user.save();

        response.status(201).send(fillCard);
    }

    async show({ params, auth }) {

        let card = params.card;

        const user = await auth.getUser();
        const fillCard = await FillCard.findOne({ user, card })

        response.status(200).send(fillCard);
    }

    async update() {

    }

    async destroy() {

    }
}

module.exports = FillCardController
