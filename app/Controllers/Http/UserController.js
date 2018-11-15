'use strict'

const User = use('App/Models/User');

class UserController {

    async index({ response, auth }) {

        let { username, email, name, cpf, birth, goodies } = await auth.getUser();

        response.status(200).send({ username, email, name, cpf, birth, goodies });
    }

    async show() {

    }

    async update() {

    }

    async destroy() {

    }
}

module.exports = UserController
