/* Bulma JS */
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

/* Init animate.js */
var isMobile = function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
      return true;
  } else {
      return false;
  }
};
var animate = new Animate({        
  target: '[data-animate]',
  animatedClass: 'js-animated',
  offset: [0.5, 0.5],
  onResize: true,
  disableFilter: isMobile,
});
animate.init();

/* TOC */
var sticky = new Sticky('#fixed-toc');