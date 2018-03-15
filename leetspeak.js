/* leetspeak.js */

var leetspeak = function(string) {
    var specialLetters = {
        'a' : 4,
        'e' : 3,
        'g' : 6,
        'i' : 1,
        'o' : 0,
        's' : 5,
        't' : 7
    };
    string = string.toLowerCase();
    newString = '';
    for (var i = 0; i < string.length; i++) {
        //console.log("letter :: " + string[i]);
        if (string[i] in specialLetters) {
            newString = newString + specialLetters[string[i]];
        } else {
            newString = newString + string[i];
        }
    }
    return newString;
};

module.exports.leetspeak = leetspeak;
