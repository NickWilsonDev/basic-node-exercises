/* printNumbersWhileLoop.js */

var printNumbersWhile = function (start, end) {
    var array = [];
    i = start;
    while (i <= end) {
        array.push(i);
        i++;
    }
    return array;
}

module.exports.printNumbersWhileLoop = printNumbersWhile;
