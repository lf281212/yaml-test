'use strict';

const yaml = require('js-yaml');

function resolveYamlFloat3(data) {
    if (data.length != 3) return false;
    for (let item of data) {
        if (isNaN(item)) return false;
    };
    return true;
}

function constructYamlFloat3(data) {
    return data;
}

function isFloat3(object) {
    return Object.prototype.toString.call(object) === '[object Array]';
}

module.exports = new yaml.Type('Float3', {
    kind: 'sequence',
    resolve: resolveYamlFloat3,
    construct: constructYamlFloat3,
    predicate: isFloat3,
    represent: {
        lowercase: () => object.toLoweCase(),
        uppercase: () => object.toUpperCase(),
        camelcase: () => object
    },
    defaultStyle: 'lowercase'
});