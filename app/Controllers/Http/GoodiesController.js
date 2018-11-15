'use strict'

const Goodies = use('App/Models/Goodies');
const Card = use('App/Models/Card');

const { goodiesF, cardF } = use('App/Utils/ModelFilter');

class GoodiesController {

    async index({ response, auth }) {

        let user = await auth.getUser();

        const goodies = await Goodies.find({ user }, goodiesF).populate('card', cardF);

        response.status(200).send(goodies);
    }

    async store({ request, response, auth }) {

        let { card } = request.all();

        let user = await auth.getUser();

        const goodies = await Goodies.create({ card, user });

        user.goodies = [...user.goodies, goodies._id];

        await user.save();

        response.status(201).send(goodies);
    }

    async show({ params, auth }) {

        let card = params.card;

        const user = await auth.getUser();
        const goodies = await Goodies.findOne({ user, card })

        response.status(200).send(goodies);
    }

    async update() {

    }

    async destroy() {

    }
}

module.exports = GoodiesController
