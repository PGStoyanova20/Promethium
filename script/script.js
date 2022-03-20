document.addEventListener('DOMContentLoaded', () => {

  // Gets all elements from navbar-burger
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Checks for navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Adds the possibility to click on all of the options
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Gets the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    } 
  
  });