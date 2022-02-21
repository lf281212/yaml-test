'use strict';

const yaml = require('js-yaml');

function resolveYamlEnum(data) {
    if (data === 'GameModes' || data === 'GameCharacters' || data === 'GameLevels') return true;
    return false;
}

function constructYamlEnum(data) {
    return data;
}

function isEnum(object) {
    return Object.prototype.toString.call(object) === '[object String]';
}

module.exports = new yaml.Type('Enum', {
    kind: 'scalar',
    resolve: resolveYamlEnum,
    construct: constructYamlEnum,
    predicate: isEnum,
    represent: {
        lowercase: () => object.toLoweCase(),
        uppercase: () => object.toUpperCase(),
        camelcase: () => object
    },
    defaultStyle: 'camelcase'
});