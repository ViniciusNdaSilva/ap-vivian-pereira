$(document).ready(function() {
  $('a.nav-link').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});


window.addEventListener('scroll', function() {
  var menu = document.getElementById('menu');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    menu.classList.add('menu-background-changed');
  } else {
    menu.classList.remove('menu-background-changed');
  }
});