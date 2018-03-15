/* test.js */
var assert = require('assert');/* test.js */

var forloop = require('./printNumberForLoop');
var testarr = [1, 2];
assert(testarr.toString()  === forloop.printNumbersForLoop(1, 2).toString(), 'two arrays should be equal');


var whileloop = require('./printNumbersWhileLoop');
var testarr = [1, 2];
assert(testarr.toString()  === whileloop.printNumbersWhileLoop(1, 2).toString(), 'two arrays should be equal');


var printSquare = require('./printSquare');
console.log(printSquare.printSquare(2));
assert.deepEqual(printSquare.printSquare(2)  === '**\n**', 'two squares should be equal');


