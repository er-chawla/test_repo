const fs = require('fs');
const main = (param) => {
    if (!!param) {
        throw ''
    }
    const data = fs.readFile(param, 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });

    return data;
};



module.exports = main;