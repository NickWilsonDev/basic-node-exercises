/* factors */

var factors = function (num) {
    array = [];

    for (var i = 1; i < num + 1; i++) {
        if (num % i == 0) {
            array.push(i);
        }
    }
    return array;
}

module.exports.factors = factors;
