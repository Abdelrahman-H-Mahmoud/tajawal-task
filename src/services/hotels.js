'use strict';

const axios = require('axios');

const api = require('./../config/api');

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
module.exports = {
    fetchHotels
};