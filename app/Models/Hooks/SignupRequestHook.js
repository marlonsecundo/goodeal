'use strict'

const SignupRequestHook = exports = module.exports = {}

const User = use('App/Models/User');
const ValidationEx = use('App/Exceptions/ValidationException');

SignupRequestHook.checkDuplicateUser = async (singup) => {

    let user = await User.findOne({
        $or: [
            { email: singup.email },
            { username: singup.username }
        ]
    });

    if (!!user) throw new ValidationEx();
}
