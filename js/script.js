function playGame(playerInput) {
	clearMessages();
	function getMoveName(argMoveId) {
		if (argMoveId == 1) {
			return "kamień";
		} else if (argMoveId == 2) {
			return "papier";
		} else if (argMoveId == 3) {
			return "nożyce";
		} else {
			printMessage("Nie znam ruchu o id " + argMoveId + ".");
			return "nieznany ruch";
		}
	}

	//generowanie ruchu komputera
	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log("Wylosowana liczba to: " + randomNumber);

	let argComputerMove = getMoveName(randomNumber);
	/*
if (randomNumber == 1) {
	argComputerMove = "kamień";
} else if (randomNumber == 2) {
	argComputerMove = "papier";
} else if (randomNumber == 3) {
	argComputerMove = "nożyce";
}
*/
	printMessage("Mój ruch to: " + argComputerMove);

	//wywołanie ruchu gracza
	/*	let playerInput = prompt(
		"Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
	);
*/
	console.log("Gracz wpisał: " + playerInput);

	let argPlayerMove = getMoveName(playerInput);

	/*
if (playerInput == "1") {
	argPlayerMove = "kamień";
} else if (playerInput == "2") {
	argPlayerMove = "papier";
} else if (playerInput == "3") {
	argPlayerMove = "nożyce";
}
*/
	printMessage("Twój ruch to: " + argPlayerMove);

	//logika gry
	function displayResult(argComputerMove, argPlayerMove) {
		console.log(argComputerMove, argPlayerMove);
		if (argPlayerMove == "nieznany ruch") {
			printMessage("nieprawidłowe zagranie");
		} else if (argPlayerMove == argComputerMove) {
			printMessage(`Remis!!!`);
		} else if (
			(argComputerMove == "kamień" && argPlayerMove == "papier") ||
			(argComputerMove == "papier" && argPlayerMove == "nożyce") ||
			(argComputerMove == "nożyce" && argPlayerMove == "kamień")
		) {
			printMessage("Gracz wygrywa!");
		} else {
			printMessage("Komputer wygrywa!");
		}
	}
	displayResult(argComputerMove, argPlayerMove);
}
document.getElementById("play-rock").addEventListener("click", function() {
	playGame(1);
});
document.getElementById("olay-paper").addEventListener("click", function() {
	playGame(2);
});
document.getElementById("play-scissors").addEventListener("click", function() {
	playGame(3);
});
