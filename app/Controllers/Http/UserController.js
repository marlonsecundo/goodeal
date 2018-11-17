'use strict'

const User = use('App/Models/User');
const { userF, filterDoc } = use('App/Utils/ModelFilter');

class UserController {

    async update({ request, response, auth }) {

        const options = { new: true, runValidators: true, fields: userF };

        let { _id } = await auth.getUser();

        let { name, birth, cpf } = request.all();

        let user = await User.findOneAndUpdate(_id, { name, birth, cpf }, options);

        response.status(200).send(user);
    }
}

module.exports = UserController
