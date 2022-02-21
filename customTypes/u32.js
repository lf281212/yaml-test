'use strict';

const yaml = require('js-yaml');

function resolveYamlU32(data) {
    if (+data >= 0  && +data < 2 ** 32) return true;
    return false;
}

function constructYamlU32(data) {
    return data;
}

function isU32(object) {
    return Object.prototype.toString.call(object) === '[object Number]';
}

module.exports = new yaml.Type('U32', {
    kind: 'scalar',
    resolve: resolveYamlU32,
    construct: constructYamlU32,
    predicate: isU32,
    represent: {
        lowercase: () => object.toLoweCase(),
        uppercase: () => object.toUpperCase(),
        camelcase: () => object
    },
    defaultStyle: 'camelcase'
});