'use strict';

const axios = require('axios'),
    api = require('./../config/api'),
    _ = require('lodash'),
    {filterByString,parseStringDateToDate} = require('../helpers/filtrationHelpers');

const fetchHotels = async ()=>{
    let hotels = await axios({
        method:'get',
        url:api.url
    }).then(function (response) {
        return response;
    }).catch(function (error) {
        return error;
    });      
    return hotels.data;  
};

const filterHotels = (data , criterias)=>{
    let result;

    if(criterias.hasOwnProperty('name')){
        result = filterByString (data,'name',criterias['name'].toLowerCase());
    }
    if(criterias.hasOwnProperty('price')){
        let priceRange = criterias['price'].split(':').map(element => {
            return parseFloat (element);
        });
        result = _.filter(data,function(element){
            return element['price'] >= priceRange[0] && element['price'] <= priceRange[1]; 
        });
    }
    if(criterias.hasOwnProperty('city')){
        result = filterByString (data,'city',criterias['city'].toLowerCase());
    }
    if(criterias.hasOwnProperty('date')){
        let availabilityRange = criterias['date'].split(':').map(element => {
            return parseStringDateToDate(element);
        });
        data.forEach(element => {
            element['availability'].forEach(range => {
                let from = parseStringDateToDate(range['from']);
                let to = parseStringDateToDate(range['to']);
                if(from <= availabilityRange[0]){
                    if(to >=availabilityRange[1]){
                        console.log('available');
                    }
                    else{
                        console.log('not available');
                    }
                }
                else{
                    console.log('available');
                }
            });
        });
        return data;
    }
    return result;

};

const sortHotels =  (data,sortCriteria)=>{
    if(data.hasOwnProperty('hotels')){
        data = data.hotels;
    }
    return  _.sortBy(data,sortCriteria);
};
module.exports = {
    fetchHotels,
    filterHotels,
    sortHotels
};