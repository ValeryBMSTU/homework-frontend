"use strict";

const reducer = (accum, element) => (Array.isArray(element)) ? accum.concat(plain(element)) : accum.concat(element);

const plain = list => {
    return [...list.reduce(reducer, [])];
};
