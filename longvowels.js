/* longvowels.js */

var longLongVowels = function (str) {
    str = str.replace('oo', 'ooooo');
    str = str.replace('ee', 'eeeee');
    str = str.replace(/aa/g, 'aaaaa');
    str = str.replace(/ii/g, 'iiiii');
    return str;
};

module.exports = longLongVowels;
