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