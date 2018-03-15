/* printBox.js */


var printBox = function(width, height) {
    boxTop = '';
    box = '';
    for (var i = 0; i < width; i++) {
        boxTop = boxTop + '*';
    }
    bottom = boxTop;
    side = '*'
    for (var i = 0; i < width - 2; i++) {
        side = side + ' ';
    }
    side = side + '*';

    
    box = box + boxTop + '\n';
    for (var i = 0; i < height - 2; i++) {
        box = box + side + '\n';
    }
    box = box + bottom + '\n';
    return box;
}

module.exports.printBox = printBox;
