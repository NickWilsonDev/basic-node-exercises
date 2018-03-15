/* sumNumbers.js */

var sumNumbers = function (arr) {
    
    total = 0;
    for (element in arr) {
        //console.log(element);
        total = total + arr[element];
    }
    return total;
};


var array = [1, 2, 3, 4];
console.log(array.reduce((a, b) => a + b));

console.log(array.reduce( function(a, b) {
        return a + b;
    }));
module.exports = sumNumbers;
