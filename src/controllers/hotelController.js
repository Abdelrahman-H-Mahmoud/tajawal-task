'use strict';
const _ = require('lodash'),
    hotelsApi = require('../services/hotels'),
    hotel = require('../models/hotel');
    
const fetchHotels = (request)=>{
    let searchCriteria = _.pick(request.query,hotel.searchCriteria);
    let sortCriteria = _.pick(request.query,hotel.sortCriteria);
    let hotels;

    return hotelsApi.fetchHotels()
        .then((result)=>{
            hotels = result;
            if(_.isEmpty(searchCriteria) && _.isEmpty(sortCriteria)){
                return hotels; 
            }
            if(!_.isEmpty(searchCriteria)){
                hotels = hotelsApi.filterHotels(result.hotels, searchCriteria);
            }
            if(!_.isEmpty(sortCriteria) && !_.isEmpty(hotels)){
                hotels = hotelsApi.sortHotels(hotels,sortCriteria['sort_by']);
            }
            return hotels;
        })
        .catch((error)=>{
            return error;
        });
};
module.exports = {
    fetchHotels
};