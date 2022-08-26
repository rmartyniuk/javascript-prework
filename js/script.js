var computerMove;
computerMove = 'papier';
printMessage('Zagrałem' + computerMove + '! Jeśli Twój ruch to kamień, to wygrywasz!');

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
  printMessage('Twój ruch: ' + playerMove);
} else {
  if (playerInput == '2') {
    playerMove = 'nożyce';
    printMessage('Twój ruch: ' + playerMove);
  } else {
    if (playerInput == '3') {
      playerMove = 'papier';
      printMessage('Twój ruch: ' + playerMove);
    } else {
      playerMove = 'nieznany ruch';
    }
  }
}