/* encrypt.js */

var findKey = function(hashArray, value) {
    return hashArray.indexOf(value);
};

var cipher = function (string, offset) {
    var alphabet = [];
    for (var i = 65; i <= 65 + 52 + 5; i++) {
        alphabet[i - 65] = String.fromCharCode(i);
    }
    newString = ''
    for (var i = 0; i < string.length; i++) {
        //console.log(string[i]);
        key = findKey(alphabet, string[i])
        newString += alphabet[key - offset];
    }
    return newString;
};

var deCipher = function (string, offset) {
    var alphabet = [];
    for (var i = 65; i <= (65 + 52 + 5); i++) {
        alphabet[i - 65] = String.fromCharCode(i);
    }
    newString = ''
    for (var i = 0; i < string.length; i++) {
        //console.log(string[i]);
        key = findKey(alphabet, string[i])
        //console.log("offset " + (key+offset));
        if (key + offset > 119) {
            offset = (key + offset) % 109;
        }
        newString += alphabet[key + offset];
    }
    return newString;
};


module.exports.cipher = cipher;
module.exports.decipher = deCipher;
