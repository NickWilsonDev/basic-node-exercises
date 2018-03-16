/* save_web_page.js */
/* prompt user for url and output file, read contents url and write to output 
 * file.
 */


const readline = require('readline');
const fs = require('fs');
const request = require('request');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input file: ', (url) => {
    request(url, function (err, response, body) {
        if (err)
            return console.log(err);
        console.log('statusCode: ' + response.statusCode);
        rl.question('Output file: ', (output_file) => {
            console.log("writing to " + output_file);
            fs.writeFile(output_file, body, function(err) {
                if(err) {
                    return console.log(err);
                }
                rl.close();
                console.log("all done..");
                //process.exit();
            });
        });
        //console.log(data.toString().toUpperCase());
    });
});
