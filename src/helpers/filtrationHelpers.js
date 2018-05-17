const _ = require('lodash');


const filterByString = (data ,searchKey,searchValue)=>{
    return _.filter(data,(element)=>{
        return element[searchKey].toLowerCase() === searchValue.toLowerCase();
    });
};

const parseStringDateToDate = (str)=>{
    let dateArray = str.split('-');
    return Date.parse(`${dateArray[1]}-${dateArray[0]}-${dateArray[2]}`);
};

module.exports={
    filterByString,
    parseStringDateToDate
};