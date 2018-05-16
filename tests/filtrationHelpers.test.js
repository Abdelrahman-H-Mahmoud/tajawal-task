const {expect} = require('code') ,
    Lab = require('lab') ,     
    lab = exports.lab = Lab.script(),
    hotelData = require('./hotelData'),
    {filterByString} = require('../src/helpers/filtrationHelpers');


   
lab.experiment('Filter Hotels by (string) search key', function() {
        
    lab.test('filter hotels by (string) key ', function() {
        let hotelCity = {'city':'dubai'};

        let result = filterByString(hotelData,'city',hotelCity['city']);
        
        expect(result[0]['city']).to.equal(hotelCity['city']);
    });
   
});