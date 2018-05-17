const _ = require('lodash');


const filterByString = (data ,searchKey,searchValue)=>{
    return _.filter(data,(hotel)=>{
        return hotel[searchKey].toLowerCase() === searchValue.toLowerCase();
    });
};

const filterByPrice = (data ,priceRangeStr)=>{
    let priceRange = priceRangeStr.split(':').map(element => {
        return parseFloat (element);
    });
    return _.filter(data,function(hotel){
        return hotel['price'] >= priceRange[0] && hotel['price'] <= priceRange[1]; 
    });
};

const filterByDate = (data ,dateStr)=>{
    let availabilityRange = dateStr.split(':').map(element => {
        return parseStringDateToDate(element);
    });
    return data.filter(hotel => {
        hotel['availability'] = hotel['availability'].filter(range => {
            let from = parseStringDateToDate(range['from']);
            let to = parseStringDateToDate(range['to']);
            return from <= availabilityRange[0] && to >= availabilityRange[1];
        });
        return hotel['availability'].length > 0;
    });
};

const parseStringDateToDate = (str)=>{
    let dateArray = str.split('-');
    return Date.parse(`${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`);
};

module.exports={
    filterByString,
    parseStringDateToDate,
    filterByPrice,
    filterByDate
};