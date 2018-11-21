'use strict'

const User = use('App/Models/User');
const { userF, filterDoc } = use('App/Utils/ModelFilter');

class UserController {

    async show({ request, response }) {

    }

    async update({ request, response }) {

        const options = { new: true, runValidators: true, fields: userF };

        let { id } = request.params;

        let { name, birth, cpf } = request.all();

        let user = await User.findOneAndUpdate(id, { name, birth, cpf }, options);

        response.status(200).send(user);
    }
}

module.exports = UserController
