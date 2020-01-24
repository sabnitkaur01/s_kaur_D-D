(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img');

	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources,
		// and set the drop zone background

		debugger;
	}


	// add event handling here
	// what triggers do we need?

	// click on the button buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet))



})();
