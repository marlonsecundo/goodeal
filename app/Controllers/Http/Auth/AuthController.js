'use strict'

const User = use('App/Models/User');
const Company = use('App/Models/Company');

const Hash = use('Hash');

const NotFoundEx = use('App/Exceptions/NotFoundException');
const AuthEx = use('App/Exceptions/AuthException');

class AuthController {

    async loginUser({ request, response, auth }) {

        let { email, username, password } = request.all();

        const user = await User.findOne({
            $or: [{ email }, { username }]
        });

        if (!user) throw new NotFoundEx("User not found.");

        let isCheck = await Hash.verify(password, user.password);

        if (!isCheck) throw new AuthEx('Incorret username or password.');

        let token = await auth.generate(user, true);

        response.status(201).send(token);
    }

    async loginCompany({ request, response, auth }) {

        let { cpnj, password } = request.all();

        const company = await Company.findOne({ cpnj });

        if (!company) throw new NotFoundEx("Company not found");

        let isCheck = await Hash.verify(password, company.password);

        if (!isCheck) throw new AuthEx('Incorret cpnj or password');

        let token = await auth.generate(company, true);

        response.status(201).send(token);

    }

}

module.exports = AuthController
