printMessage("Zagrałem kamień! Jeśli Twój ruch to papier, to wygrywasz!");

let computerMove = `kamień`;

printMessage(
	"Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!"
);

let playerMove = `papier`;

printMessage(
	"Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!"
);

let playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");

console.log("Gracz wpisał: " + playerInput);

let playerMove = "nieznany ruch";

if (playerInput == "1") {
	playerMove = "kamień";
} else if (playerInput == "2") {
	playerMove = "papier";
} else (playerInput == "3") {
    playerMove = "nożyce";
}
printMessage("Twój ruch to: " + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
printMessage('Ty wygrywasz!');
}      
if else ( computerMove == 'nożyce' && playerMove == 'kamień'){
printMessage('Ty wygrywasz!');
}
if else ( computerMove == 'papier' && playerMove == 'nożyce'){
printMessage('Ty wygrywasz!');
}
if else ( computerMove == 'papier' && playerMove == 'kamień'){
printMessage('Komputer wygrywa!');
}
if else ( computerMove == 'kamień' && playerMove == 'nożyce'){
printMessage('Komputer wygrywa!');
}
else ( computerMove == 'nożyce' && playerMove == 'papier'){
printMessage('Komputer wygrywa!');
}
