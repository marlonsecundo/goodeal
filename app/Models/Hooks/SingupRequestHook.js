'use strict'

const SingupRequestHook = exports = module.exports = {}

const User = use('App/Models/User');
const ValidationEx = use('App/Exceptions/ValidationException');

SingupRequestHook.checkDuplicateUser = async (singup) => {

    let user = await User.findOne({ cpf: singup.cpf, email: singup.email });

    if (!!user)
        throw new ValidationEx();

        


}
