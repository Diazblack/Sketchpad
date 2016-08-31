var numb = 4;
$(document).ready(function(){
	
	grid();

	$('frame , div').on('mouseenter','#element', function(){
		$(this).css('background', 'black');
	});
//  button function in the nav bar	
	$('.navbar').on('click','button', function()
	{  
		numb = prompt('enter a integer');
		$('.frame').empty();
		grid();
	});
});
//this function controls the amount of squares and their area
	function grid() { 
	var counter= 0;
	var square = numb*numb;
	var perimeter = 640/numb-4;
	var styles = {'height': perimeter +'px','width': perimeter +'px'};

	if (perimeter < 11) {
		perimeter += 1;
		styles = {'height': perimeter +'px','width': perimeter +'px', 'margin': '0.5px'};
	} ;

	while (counter< square)
	{
		$('.frame').prepend('<div id="element"></div>');
		$('#element').css(styles);
		counter++;
	};
};	
