const xml2js = require('xml2js');
const fs = require('fs');

// read XML from a file
const xml = fs.readFileSync('user.xml');

// convert XML to JSON
(async () => {
    try {
        const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });

        // convert it to a JSON string
        const json = JSON.stringify(result, null, 4);

        // save JSON in a file
        fs.writeFileSync('user.json', json);

    } catch (err) {
        console.log(err);
    }
})();