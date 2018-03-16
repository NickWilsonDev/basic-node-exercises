/* cap_file.js */


const readline = require('readline');
const dns = require('dns');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Domain name: ', (name) => {
    dns.lookup(name, (err, address) => {
        if (err)
            throw err;
        console.log('IP Address: ' + JSON.stringify(address));
    });
    console.log("all done?");
});
