"use strict";

let plain = list => {
    let temp = [];
    
    for (let i of list) {
        temp = (Array.isArray(i)) ? temp.concat(plain(i)) : temp.concat(i);
    }
    
    return [...temp];
};