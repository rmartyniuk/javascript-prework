/**
 * Nasłuchiwanie kliknięcia
 */
const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function () {
    buttonClicked('kamień');
});
const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function () {
    buttonClicked('papier');
});
const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function () {
    buttonClicked('nożyce');
});

/*Czyszczenie poprzednich komunikatów, losowanie liczby, */

function buttonClicked(playerMove) {
    console.log(playerMove + ' został kliknięty');
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    let = computerMove = getMoveName(randomNumber);
    displayResult(playerMove, computerMove);
}

/**
 * Przypisanie wylosowanej liczby do jednej z trzech opcji wyboru gry
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
 * Ustalenie wyniku gry w różnych wariantach wyboru gracza/wylosowanej opcji przez komputer
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