var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;
/**
 * Describe this function...
 */
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});

function buttonClicked(argButtonName) {
    console.log(argButtonName + ' został kliknięty');
    clearMessages();
    playerMove = argButtonName;
    randomNumber = Math.floor(Math.random() * 3 + 1)
    computerMove = getMoveName(randomNumber);
    displayResult(playerMove, computerMove);
}
/**
 * Assigning a number to move
 */
function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        console.log('wywołano funkcję getMoveName z argumentem' + argMoveId);
    }
}
/**
 * determining the outcome of the game
 */
function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);

    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('REMIS!!!');
    } else {
        printMessage('Przegrywasz ;(((');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}