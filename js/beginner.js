//Declare a variable called currentTurn and set it equal to "O"

var spaces = document.getElementsByTagName("td");

for (var i = 0; i < spaces.length; i++) {
	spaces[i].addEventListener("click", function() {
		if (this.innerHTML === "") {
			if (currentTurn === "X") {
				//Change currentTurn to "O"
			} else {
				//Change currentTurn to "X"
			}

			this.innerHTML = currentTurn;

			//Call the function checkWin
		} else {
			return false;
		}
	});
}

function checkWin() {
	function getPlace(selector) {
		return document.getElementById(selector).innerHTML;
	}

	var rowA = [getPlace("a1"), getPlace("a2"), getPlace("a3")];
	var rowB = [getPlace("b1"), getPlace("b2"), getPlace("b3")];
	var rowC = [getPlace("c1"), getPlace("c2"), getPlace("c3")];

	var colA = [getPlace("a1"), getPlace("b1"), getPlace("c1")];
	var colB = [getPlace("a2"), getPlace("b2"), getPlace("c2")];
	var colC = [getPlace("a3"), getPlace("b3"), getPlace("c3")];

	var diagA = [getPlace("a1"), getPlace("b2"), getPlace("c3")];
	var diagB = [getPlace("a3"), getPlace("b2"), getPlace("c1")];

	var fullSet = [rowA, rowB, rowC, colA, colB, colC, diagA, diagB];

	fullSet.forEach(function(set) {
		if (set[0] !== "" && set[1] !== "" && set[2] !== "" && set[0] === set[1] && set[0] === set[2]) {
			//Create an alert here with the currentTurn + "Wins!". An example may be "X Wins!" or "O Wins!"
		}
	});
}