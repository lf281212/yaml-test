'use strict';

const yaml = require('js-yaml');

function resolveYamlRequirement(data) {
    if (!data.hasOwnProperty('min_battles')) return false;
    return true;
}

function constructYamlRequirement(data) {
    return data;
}

function isRequirement(object) {
    return Object.prototype.toString.call(object) === '[object Object]';
}

module.exports = new yaml.Type('Requirement', {
    kind: 'mapping',
    resolve: resolveYamlRequirement,
    construct: constructYamlRequirement,
    predicate: isRequirement,
    represent: {
        lowercase: () => object.toLoweCase(),
        uppercase: () => object.toUpperCase(),
        camelcase: () => object
    },
    defaultStyle: 'camelcase'
});