$(document).ready(function() {
	drawpad(16);

	$('#clear').click(function() {
		// first, remove all divs of class block, if any
		$('div.block').remove();

		// prompt for number of squares per side
		var size = prompt("Enter Squares per Side");
		if (size > 0) {
			drawpad(size);
		} else {
			$('#message').html("Invalid Squares per Side Entered");
		}
	});
});

function drawpad(squares) {
	// draw the pad
	for(i = 0; i < squares*squares; i++) {
		$('#sketchpad').append('<div class="block"></div>');
	}

	// update the css 
	var pixels = Math.floor(512/squares);
	$('.block').css("height",pixels+"px");
	$('.block').css("width",pixels+"px");
	$('#message').html("Displaying " + squares + " squares per side");

	// recompute and set the wrapper width
	var wrapWidth = pixels*squares;
	$('#wrapper').css("width",wrapWidth+"px");

	// enable hover event
	$('.block').hover(function() {
		$(this).addClass('show');
	});
}
