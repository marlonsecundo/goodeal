const base = '-_id -__v -created_at -updated_at';

const userF = base + ' -password';
const companyF = base + ' -password';
const addressF = base;
const cardF = '-__v -created_at -updated_at -company';
const goodiesF = base + ' -user'

function filterDoc(doc, filter) {

    filter.split(' ').map((item) => {
        let prop = item.replace('-', '');
        delete doc[prop];
    });

    return doc;
}

module.exports = { companyF, addressF, cardF, goodiesF, userF, filterDoc };