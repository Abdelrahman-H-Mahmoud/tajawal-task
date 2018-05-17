'use strict';

const axios = require('axios'),
    api = require('./../config/api'),
    _ = require('lodash'),
    {filterByString,filterByPrice,filterByDate} = require('../helpers/filtrationHelpers');

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
    let result = data;

    if(criterias.hasOwnProperty('name')){
        result = filterByString (result,'name',criterias['name'].toLowerCase());
    }
    if(criterias.hasOwnProperty('price')){
        result = filterByPrice (result,criterias['price']);
    }
    if(criterias.hasOwnProperty('city')){
        result = filterByString (result,'city',criterias['city'].toLowerCase());
    }
    if(criterias.hasOwnProperty('date')){
        result = filterByDate (result,criterias['date']);
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