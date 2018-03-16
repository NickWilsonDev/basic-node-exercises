/* cap_file.js */


const readline = require('readline');
const fs = require('fs');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('filename: ', (answer) => {
    fs.readFile(answer, function (err, data) {
        if (err)
            throw err;
        console.log(data.toString().toUpperCase());
    });
    rl.close();
});
