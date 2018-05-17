const {expect} = require('code') ,
    Lab = require('lab') ,     
    lab = exports.lab = Lab.script(),
    hotelData = require('./hotelData'),
    {filterByString,filterByPrice,filterByDate,parseStringDateToDate} = require('../src/helpers/filtrationHelpers');


   
lab.experiment('Filter Hotels by (string) search key', function() {
        
    lab.test('filter hotels by (string) key ', function() {
        let hotelCity = {'city':'dubai'};

        let result = filterByString(hotelData,'city',hotelCity['city']);
        
        expect(result[0]['city']).to.equal(hotelCity['city']);
    });

    lab.test('filter hotels by (price) key ', function() {

        let hotelPriceRange = '20:103';

        let priceRange = hotelPriceRange.split(':').map(element => {
            return parseFloat (element);
        });
        let result = filterByPrice(hotelData,hotelPriceRange);
        expect(priceRange[0]<=result[0]['price']<=priceRange[1]).to.equal(true);

    });

    lab.test('filter hotels by (date) key ', function() {

        let hotelDateRange = '10-10-2020:17-10-2020';

        let result = filterByDate(hotelData,hotelDateRange);

        hotelDateRange = hotelDateRange.split(':').map(element => {
            return parseStringDateToDate(element);
        });
        let from = parseStringDateToDate(result[0]['availability'][0]['from']);
        expect(from >=hotelDateRange[0]).to.equal(true);

    });
    
   
});