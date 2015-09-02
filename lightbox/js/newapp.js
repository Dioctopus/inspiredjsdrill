
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $cap = $("<p></p>");

$overlay.append($image);

$overlay.appned($cap);

$("body").append($overlay);

$("#imageGallery a").click(function(event) {
	event.preventDefault();

	var link = $(this).attr("href");
	

	$image.arrt('src', link);
	
	$overlay.show();
	var caption = $(this).children("img").attr("alt");
 	$cap.text(caption);


});


$overlay.click(function() {
	$overlay.hide();
});