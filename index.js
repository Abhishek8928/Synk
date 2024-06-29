
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('header');
      if (window.scrollY > 0) {
          navbar.style.backgroundColor = 'rgba(11, 11, 11, 0.32)'; 
      } else {
          navbar.style.backgroundColor = 'rgb(10, 10, 11)'; 
      }
    });
    
    

gsap.to(".animated-background",{
    duration:2,
    display:"none",
    
})