'use strict'

const User = use('App/Models/User');

class UserController {

    async show({ request, response, auth }) {

        let { username, email, name, cpf, birth, goodies, fillCards } = await auth.getUser();

        response.status(200).send({ username, email, name, cpf, birth, goodies, fillCards });
    }

    async update({ request, response }) {



    }

    async destroy({ request, response }) {

    }
}

module.exports = UserController
