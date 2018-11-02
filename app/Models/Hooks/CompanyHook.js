'use strict'

const CompanyHook = exports = module.exports = {}
const Hash = use('Hash');

CompanyHook.hashPassword = async (company) => {

    company.password = await Hash.make(company.password);

}

CompanyHook.filterData = async (company) => {

    let keys = ['_id', 'created_at', 'updated_at', '__v'];
    keys.map((key) => {
        delete company._doc[key];
    });
}
