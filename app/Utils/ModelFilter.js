const base = '-_id -__v -created_at -updated_at';

const companyF = base + ' -password';
const addressF = base;
const cardF = base + ' -company';

module.exports = { companyF, addressF, cardF };