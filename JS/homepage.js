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

let welcome = document.querySelector('.welcome');
welcome.addEventListener('mouseenter', function(event){
    welcome.style.color = 'blue';
});

welcome = document.querySelector('.welcome');
welcome.addEventListener('mouseleave', function(event){
    welcome.style.color = 'black';
});

let join = document.querySelector('.join');
join.addEventListener('mouseenter', function(event){
    join.style.color = 'blue';
});

join = document.querySelector('.join');
join.addEventListener('mouseleave', function(event){
    join.style.color = 'black';
});

let about = document.querySelector('.about');
about.addEventListener('mouseenter', function(event){
    about.style.color = 'blue';
});

about = document.querySelector('.about');
about.addEventListener('mouseleave', function(event){
    about.style.color = 'black';
});

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

document.getElementById("p1").innerHTML = "If you are interested in our product, please feel free to sign up and begin taking advantage of all we have to offer! We have normal updates and it takes no time at all to sign up and join all of us here at Good 1 Pop!";


