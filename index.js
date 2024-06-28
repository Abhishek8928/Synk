
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('header');
      if (window.scrollY > 0) {
          navbar.style.backgroundColor = 'rgb(10,10,11,0.8)'; 
      } else {
          navbar.style.backgroundColor = 'rgb(10, 10, 11)'; 
      }
    });