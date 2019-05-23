//scroll to top bar//

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//event listeners for the navigation//
let navItems = document.querySelectorAll('.anchors');
navItems.forEach(function(item){
    item.addEventListener('mouseenter', function(event){
        item.style.fontSize = '2.5rem';
    });
});

navItems = document.querySelectorAll('.anchors');
navItems.forEach(function(item){
    item.addEventListener('mouseleave', function(event){
        item.style.fontSize = '2rem';
    });
});

//image carousel//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//sign up button toggle//
function myFunction() {
    var x = document.getElementById("hidesignup");
    if (x.style.display === "block")
        x.style.display = "none";
        else {
        x.style.display = "block";
    }
}
