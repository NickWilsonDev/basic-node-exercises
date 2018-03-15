/* printSquare.js */

var printSquare = function (size) {
    var row = '';
    var square = '';
    for (var i = 0; i < size; i++) {
        row = row + '*';
    }
    for (var i = 0; i < size; i++) {
        square = square + row + '\n';
    }
    return square;
}

module.exports.printSquare = printSquare;
