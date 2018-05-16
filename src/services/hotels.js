'use strict';

const axios = require('axios'),
    api = require('./../config/api'),
    _ = require('lodash');

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
        result = _.filter(data,(element)=>{
            return element['name'].toLowerCase() === criterias['name'].toLowerCase();
        });
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
        result = _.filter(data,(element)=>{
            return element['city'].toLowerCase() === criterias['city'].toLowerCase();
        });
    }
    if(criterias.hasOwnProperty('date')){
        // let availabilityRange = criterias[criteria].split(':').map(element => {
        //     let [day, month, year] = element.split('-');
        //     let date = `${month}-${day}-${year}`;
        //     return Date.parse(date);
        // });
        // result = _.filter(data,function(element){
        //     console.log(element['availability']);
        //     return element[criteria] >= availabilityRange[0] && element[criteria] <= availabilityRange[1]; 
        // });
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