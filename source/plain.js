"use strict";

let plain = list => {
    let newList = [];
    
    for (let i of list) {
        newList = (Array.isArray(i)) ? newList.concat(plain(i)) : newList.concat(i);
    }
    
    return [...newList];
};