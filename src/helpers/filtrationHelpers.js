const _ = require('lodash');


const filterByString = (data ,searchKey,searchValue)=>{
    return _.filter(data,(element)=>{
        return element[searchKey].toLowerCase() === searchValue.toLowerCase();
    });
};

module.exports={
    filterByString
};