(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				dropZones = document.querySelectorAll('.drop-zone'),
       	gameBoard = document.querySelector('.puzzle-board'),
				puzzleZone = document.querySelector('.puzzle-pieces')
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources
		// change the image elements on the left to match the selected puzzle
		pieceNames.forEach((piece, index) => {

			puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
			puzzlePieces[index].id = `${piece + this.dataset.puzzleref}`;

		});

		// and set the drop zone background image based on the puzzle the user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}
		function allowDrag(event) {
			console.log('started dargging an Image');

			event.dataTransfer.setData("text/plain", this.id);
		}

		function allowDragOver(event) {

			if (this.childNodes.length === 0){
			event.preventDefault();
			console.log('dragged over a drop zone');
		}
		event.dataTransfer.setData("src", this.class);
	}

			function allowDrop(event) {

				// event.preventDefault();
				console.log('dropped on a drop zone');

			let currentImage = event.dataTransfer.getData("text/plain");
			// add that image to whatever drop zone we're dropping our image on
			event.target.appendChild(document.querySelector(`#${currentImage}`));


		}

		function resetButtons () {
			for (let i = 0; i < puzzlePieces.length; i++) {
					puzzleZone.appendChild(puzzlePieces[i]);
			}
		}
	// add event handling here -> how is ythe user going to see our app?
	// what triggers do we need?

	// click on the button buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => {
		button.addEventListener('click', changeImageSet);
		button.addEventListener('click', resetButtons);
	});

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});


	//call the function and pass in the first nav button as a reference
	// research call, apply and bind -> look at MDN
	changeImageSet.call(puzzleButtons[0]);
})();
