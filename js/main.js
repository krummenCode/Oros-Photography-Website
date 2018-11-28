//====
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


//==========
//Theme btn
//=========

//Dark theme function
function darkThemeActivator() {
  //toggle bodyDarkTheme class to body
  var body = document.getElementById('body');
  body.classList.toggle('bodyDarkTheme');

  //toggle darkTheme class to main and #landing-text
  var main = document.getElementById('main');
  var landingText = document.getElementById('landing-text');
  main.classList.toggle('darkTheme');
  landingText.classList.toggle('darkTheme');

  //toggle darkBtn class to view work Btn
  var viewWorkBtn = document.getElementById('view-work');
  viewWorkBtn.classList.toggle('darkBtn');
}
