const base = '-_id -__v -created_at -updated_at';

const companyF = base + ' -password';
const addressF = base;
const cardF = '-__v -created_at -updated_at -company';
const fillCardF = base + ' -user'
module.exports = { companyF, addressF, cardF, fillCardF };