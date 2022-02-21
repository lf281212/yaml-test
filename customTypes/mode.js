'use strict';

const yaml = require('js-yaml');

function resolveYamlMode(data) {
    if (!data.hasOwnProperty('team_size')) return false;
    if (!data.hasOwnProperty('duration_s')) return false;
    if (!data.hasOwnProperty('position')) return false;
    if (!data.hasOwnProperty('requirements')) return false;
    if (!data.hasOwnProperty('levels')) return false;
    return true;
}

function constructYamlMode(data) {
    return data;
}

function isMode(object) {
    return Object.prototype.toString.call(object) === '[object Object]';
}

module.exports = new yaml.Type('Mode', {
    kind: 'mapping',
    resolve: resolveYamlMode,
    construct: constructYamlMode,
    predicate: isMode,
    represent: {
        lowercase: () => object.toLoweCase(),
        uppercase: () => object.toUpperCase(),
        camelcase: () => object
    },
    defaultStyle: 'camelcase'
});