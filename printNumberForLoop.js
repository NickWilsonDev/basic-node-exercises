/* printNumberForLoop.js */

var printNumbers = function (start, end) {
    var array = []
    for (i = start; i < end + 1; i++) {
        array.push(i);
    }
    return array;
}

module.exports.printNumbersForLoop = printNumbers;
