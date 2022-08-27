var computerMove;
computerMove = 'kamień';
printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
var computerMove;
computerMove = 'papier';
printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
var computerMove;
computerMove = 'nożyce';
printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
    playerMove = 'kamień';
    printMessage('Twój ruch: ' + playerMove);
} else if (playerInput == '2') {
    playerMove = 'papier';
    printMessage('Twój ruch: ' + playerMove);
} else if (playerInput == '3') {
    playerMove = 'nożyce';
    printMessage('Twój ruch: ' + playerMove);
} else {
    printMessage('nieznany ruch');
}

var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else {
        if (argMoveId == 2) {
            return 'papier';
        } else {
            if (argMoveId == 3) {
                return 'nożyce';
            } else {
                console.log('wywołano funkcję getMoveName z argumentem' + argMoveId);
            }
        }
    }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else {
        if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else {
            if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
                printMessage('Wygrywasz!');
            } else {
                if (argPlayerMove == argComputerMove) {
                    printMessage('REMIS!!!');
                } else {
                    printMessage('Przegrywasz ;(((');
                }
            }
        }
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);