'use strict'

const md5 = require('md5');

const SingupRequest = use('App/Models/Auth/SingupRequest');
const User = use('App/Models/User');
const Mail = use('Mail');

const NotFoundEx = use('App/Exceptions/NotFoundException');


class SingupController {

    async register({ request, response }) {

        let { name, email, password, cpf, birth } = request.all();
        let token = md5(email + password + cpf);

        let singup = await SingupRequest.create({ ...request.all(), token });

        await Mail.send('auth.confirmSingup', singup, (message) => {
            message
                .to(email)
                .from('goodeal@account.com')
                .subject('Confirm Email Address')
        });

        response.status(202).send("Confirmation email has been sent.");
    }

    async confirm({ params, response }) {

        let singup = await SingupRequest.findOne({ token: params.token });

        if (!singup)
            throw new NotFoundEx();

        await SingupRequest.deleteOne({ token: params.token });

        let { email, name, cpf, birth, password } = singup;

        await User.create({email, name, cpf, birth, password});

        response.status(201).send("User has been registred.")
    }
}

module.exports = SingupController
