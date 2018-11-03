'use strict'

const CompanyHook = exports = module.exports = {}
const Hash = use('Hash');

CompanyHook.hashPassword = async (company) => {

    company.password = await Hash.make(company.password);

}
