'use strict';
const _ = require('lodash'),
    hotelsApi = require('../services/hotels'),
    apiConfig = require('../config/api');
    
const fetchHotels = (request)=>{
    let searchCriteria = _.pick(request.query,apiConfig.searchCriteria);
    let sortCriteria = _.pick(request.query,apiConfig.sortCriteria);

    return hotelsApi.fetchHotels()
        .then((result)=>{
            if(_.isEmpty(searchCriteria) && _.isEmpty(sortCriteria)){
                return result; 
            }
            console.log(result.hotels[0].price,searchCriteria);
            let hotels = _.filter(result.hotels, searchCriteria);

            return hotels;
            
        })
        .catch((error)=>{
            return error;
        });
};
module.exports = {
    fetchHotels
};