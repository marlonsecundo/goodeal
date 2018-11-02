'use strict'

const AddressHook = exports = module.exports = {}

AddressHook.filterData = async (address) => {

    let keys = [ 'created_at', 'updated_at', '__v'];
    keys.map((key) => {
        delete address._doc[key];
    });

}
