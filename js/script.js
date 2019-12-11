let pScore = 0;
let cScore = 0;

function playGame(playerInput) {
	clearMessages();
	console.log(playerInput);
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

	printMessage("Mój ruch to: " + argComputerMove);

	//wywołanie ruchu gracza

	console.log("Gracz wpisał: " + playerInput);

	let argPlayerMove = playerInput;

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
			++pScore;
			document.getElementById("pScore").textContent = pScore;
		} else {
			printMessage("Komputer wygrywa!");
			++cScore;
			document.getElementById("cScore").textContent = cScore;
		}
	}
	displayResult(argComputerMove, argPlayerMove);
	console.log(cScore, pScore);
}

let reset = document.getElementById("rb");
reset.addEventListener("click", function () {
	pScore = 0;
	cScore = 0;
	document.getElementById("pScore").textContent = pScore;
	document.getElementById("cScore").textContent = cScore;
});


const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
	(function (index) {
		buttons[index].addEventListener("click", function (event) {
			console.log(event.currentTarget);
			playGame(event.currentTarget.id);
		});
	})(i);
}