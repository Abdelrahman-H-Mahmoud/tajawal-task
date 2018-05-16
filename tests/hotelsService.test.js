const {expect} = require('code') ,
    Lab = require('lab') ,     
    lab = exports.lab = Lab.script(),
    hotelData = require('./hotelData'),
    hotelsService = require('./../src/services/hotels');

lab.experiment('Filter Hotels', function() {
        
    lab.test('Get hotel details by name', async function() {

        let hotelName = {'name':'Concorde Hotel'};

        let result = hotelsService.filterHotels(hotelData,hotelName);

        expect(result[0]['name']).to.equal(hotelName['name']);
    });

    lab.test('Get hotel details by city', async function() {

        let hotelCity = {'city':'dubai'};

        let result = hotelsService.filterHotels(hotelData,hotelCity);

        expect(result[0]['city']).to.equal(hotelCity['city']);
    });

    lab.test('Get hotel details by price range', async function() {

        let hotelPriceRangeObj = {'price':'50:200'};

        let hotelPriceRangeArray = hotelPriceRangeObj['price'].split(':');
        
        let result = hotelsService.filterHotels(hotelData,hotelPriceRangeObj);

        expect(parseFloat(hotelPriceRangeArray[0])<=result[0]['price']<=parseFloat(hotelPriceRangeArray[1])).to.equal(true);
    });

    lab.test('Get hotel details by date range', async function() {
        //ToDo

    });
});
