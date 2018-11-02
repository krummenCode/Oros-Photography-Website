// Animate Smooth Scroll

//sets event on view work btn
//function moves images to top of screen

$('#view-work').on('click', function() {
	//constant sets location of images to top
  const images = $('#images').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
	
	//speed of scroll
    1111 
  );
});
