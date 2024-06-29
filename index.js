
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('header');
      if (window.scrollY > 0) {
          navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.32)'; 
      } else {
          navbar.style.backgroundColor = 'rgb(13, 13, 13)'; 
      }
    });
    
    

gsap.to(".animated-background",{
    duration:2,
    display:"none",
    
})