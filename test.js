/* test.js */
var assert = require('assert');/* test.js */

var forloop = require('./printNumberForLoop');
var testarr = [1, 2];
assert(testarr.toString()  === forloop.printNumbersForLoop(1, 2).toString(), 'two arrays should be equal');


var whileloop = require('./printNumbersWhileLoop');
var testarr = [1, 2];
assert(testarr.toString()  === whileloop.printNumbersWhileLoop(1, 2).toString(), 'two arrays should be equal');


var printSquare = require('./printSquare');
assert(JSON.stringify(printSquare.printSquare(2)) == JSON.stringify('**\n**\n'), 'two squares should be equal');

var printBox = require('./printBox');
assert(JSON.stringify(printBox.printBox(3,3)) == JSON.stringify('***\n* *\n***\n'), 'two boxes should be equal');


var printBanner = require('./printBanner');
assert(JSON.stringify(printBanner.printBanner('hey')) == JSON.stringify('*******\n* hey *\n*******\n'), 'two banners should be equal');


var factors = require('./factors');
assert.deepEqual(factors.factors(4), [1, 2, 4], 'two sets of facts should be equal');



var encrypt = require('./encrypt');
assert(encrypt.cipher('c', 1) === 'b', 'c enciphered with offset of 1 should be b');
assert(encrypt.decipher('b', 1) === 'c', 'b deciphered with offset of 1 should be c');


var leetspeak = require('./leetspeak');
assert(leetspeak.leetspeak('leet') === 'l337', 'im not l337');


var longVowels = require('./longvowels');
assert(longVowels('good') === 'goooood', 'long vowels');


var sumNumbers = require('./sumNumbers');
console.log(sumNumbers[1, 1, 1]);
assert(sumNumbers([1, 1, 1]) === 3, 'sum of elements of array is 3');

