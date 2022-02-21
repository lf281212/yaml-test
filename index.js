var yaml = require('js-yaml');
const Enum = require('./customTypes/enum');
const Float3 = require('./customTypes/float3');
const Mode = require('./customTypes/mode');
const Requirement = require('./customTypes/requirement');
const U32 = require('./customTypes/u32');
const fs = require('fs').promises;

async function readFile(path) {
    try {
        return await fs.readFile(path, 'utf8');
    }
    catch (err) {
        console.error(err);
        return '';
    }
}

async function process(fileName) {
    try {
        const data = await readFile(fileName);

        if (!data) return {
            err: true,
            obj: null
        }

        let obj = yaml.load(data,
            {
                schema: yaml.DEFAULT_SCHEMA.extend(
                    [
                        Enum,
                        Mode,
                        U32,
                        Float3,
                        Requirement
                    ]
                )
            }
        );

        return {
            error: false,
            obj
        }
    } catch (err) {
        console.error('Error while parsing yaml: ' + err);
        return {
            error: true,
            obj: null
        }
    }
}

async function test() {
    console.log(JSON.stringify(await process('./examples/example_1.yml')));
    console.log(JSON.stringify(await process('./examples/example_2.yml')));
    console.log(JSON.stringify(await process('./examples/example_3.yml')));
    console.log(JSON.stringify(await process('./examples/example_4.yml')));
    console.log(JSON.stringify(await process('./examples/example_5.yml')));
}

test();