'use strict'

const User = use('App/Models/User');

const Hash = use('Hash');

const NotFoundEx = use('App/Exceptions/NotFoundException');
const AuthEx = use('App/Exceptions/AuthException');

class AuthController {

    async login({ request, response, auth }) {

        let { email, username, password } = request.all();

        const user = !!username ? await User.findOne({ username }) : await User.findOne({ email });

        if (!user) throw new NotFoundEx("User not found.");

        let isCheck = await Hash.verify(password, user.password);

        if (!isCheck) throw new AuthEx('Incorret username or password.');

        let token = await auth.generate(user, true);

        response.status(201).send(token);
    }




}



module.exports = AuthController
