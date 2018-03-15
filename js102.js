/* js102.js */

//printNumbers(5, 10);


//printNumbersWhile(5, 10);


//printSquare(4);


//printBox(5, 5);


//printBanner("hey Nick");


//console.log(factors(10));



//console.log(cipher('nick', 3));


//console.log(deCipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13));


console.log(leetspeak('hello'));




var positiveNumbers = function (arr) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

//console.log(positiveNumbers([-1, 0, 4, 5, 6]));

var matrixAdd = function (matrixA, matrixB) {
    newMatrix = [];
    for (var i = 0; i < matrixA[0].length; i++) {
        tempArr = [];
        for (var j = 0; j < matrixA[0].length; j++) {
            tempArr.push(matrixA[i][j] + matrixB[i][j]);
        } 
        newMatrix.push(tempArr);
    }
    return newMatrix;
};

console.log(matrixAdd([[1, 2], [3, 4]], [[1, 1], [1, 1]]));

var matrixMult = function (matrixA, matrixB) {
// only works for 2x2 matrices
    newMatrix = [];
    tempArr = [];
    
    tempArr.push(matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][0]);
    tempArr.push(matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][0]);
    newMatrix.push(tempArr);

    tempArr = [];

    tempArr.push(matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[0][1]);
    tempArr.push(matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1]);
    newMatrix.push(tempArr);

    return newMatrix;
};

console.log(matrixMult([[2, 4], [3, 4]], [[5, 2], [3, 1]]));


var rockPaperScissors = function(ply1Throw, ply2Throw) {
    winner = "";
    if (ply1Throw == ply2Throw) {
        return 'draw';
    }
    if (ply1Throw == "paper" && ply2Throw == "scissors") {
            winner = 'player 2';
    } else if (ply1Throw == 'scissors' && ply2Throw == 'rock') {
        winner = 'player 2';
    } else if (ply1Throw == 'rock' && ply2Throw == 'paper') {
        winner = 'player 2';
    } else {
        winner = 'player1';
    }
    return winner;
};

console.log(rockPaperScissors('paper', 'paper'));

console.log(rockPaperScissors('scissors', 'paper'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper', 'scissors'));



/* Must take a 3x3 array as an parameter. */
var ticTacToe = function(arr) {
    if (arr[0][0] === arr[0][1] && arr[0][0] === arr[0][2]) {
        return arr[0][0];
    } else if (arr[1][0] === arr[1][1] && arr[1][0] === arr[1][2]) {
        return arr[1][0];
    } else if (arr[2][0] === arr[2][1] && arr[2][0] === arr[2][2]) {
        return arr[2][2];
    } else if (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) {
        return arr[0][0];
    } else if (arr[2][0] === arr[1][1] && arr[2][0] === arr[2][0]) {
        return arr[2][0];
    } else if (arr[0][0] === arr[1][0] && arr[0][0] === arr[2][0]) {
        return arr[0][0];
    } else if (arr[0][1] === arr[1][1] && arr[0][1] === arr[2][1]) {
        return arr[0][1];
    } else if (arr[0][2] === arr[1][2] && arr[0][2] === arr[2][2]) {
        return arr[0][2];
    } else {
        return null;
    }
};

var sampleGame = [
    ['o', 'o', 'x'],
    ['x', 'o', 'x'],
    ['x', 'x', 'o']
];

console.log(ticTacToe(sampleGame));
