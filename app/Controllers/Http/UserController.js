'use strict'

const User = use('App/Models/User');
const { userF, filterDoc } = use('App/Utils/ModelFilter');

class UserController {

    // For Tests
    async index({ response }) {
        const users = await User.find();

        response.status(200).send(users);
    }

    async show({ request, response }) {

        const { id } = request.params;

        const user = await User.findOne({ _id: id }, userF);

        response.status(200).send(user);
    }

    async update({ request, response }) {

        const options = { new: true, runValidators: true, fields: userF };

        const { id } = request.params;

        const data = request.only(['name', 'birth', 'cpf']);

        const user = await User.findOneAndUpdate(id, data, options);

        response.status(200).send(user);
    }
}

module.exports = UserController
