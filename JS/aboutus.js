let navItems = document.querySelectorAll('.anchors');
navItems.forEach(function(item) {
    item.addEventListener('mouseenter', function(event) {
        item.style.fontSize = '2.5rem';
    });
});

navItems = document.querySelectorAll('.anchors');
navItems.forEach(function(item) {
    item.addEventListener('mouseleave', function(event) {
        item.style.fontSize = '2rem';
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}