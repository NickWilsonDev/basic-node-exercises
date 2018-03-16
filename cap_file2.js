/* cap_file2.js */
/* prompt user for input file and output file, read contents of input file
   and capitalize them and write to output file.
*/


const readline = require('readline');
const fs = require('fs');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input file: ', (input_file) => {
    fs.readFile(input_file, function (err, data) {
        if (err)
            return console.log(err);
        rl.question('Output file: ', (output_file) => {
            console.log("writing to " + output_file);
            fs.writeFile(output_file, data.toString().toUpperCase(), function(err) {
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
