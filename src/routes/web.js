const hotelController = require('./../controllers/hotelController'),
    hotelSchema = require('../schema/hotelSchema');

module.exports = function() {
    return [
        {
            method: 'GET',
            path: '/hotels',
            handler: hotelController.fetchHotels,
            options: {
                validate: {
                    query: hotelSchema
                }
            }
        },
    ];
}();