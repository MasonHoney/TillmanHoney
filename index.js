var slidePosition = 1;
SlideShow(slidePosition);

// Forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

// Images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

// Automatic slideshow
var slideInterval = setInterval(function() {
  plusSlides(1); // Change slide every 5 seconds (adjust as needed)
}, 5000); // 5000 milliseconds (5 seconds)

// Pause the slideshow when the user hovers over it
var slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseenter', function() {
  clearInterval(slideInterval);
});

// Resume the slideshow when the user leaves
slideshowContainer.addEventListener('mouseleave', function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000);
});

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}