'use strict'

const User = use('App/Models/User');

class UserController {

    async update({ request, response, auth }) {
        let user = await auth.getUser();
        let { name, birth, cpf } = request.all();
        
        user.name = name;
        user.birth = birth;
        user.cpf = cpf;

        await user.save();

        reponse
    }

    async destroy() {

    }
}

module.exports = UserController
