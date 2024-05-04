gsap.from(".logo", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.5
  });

  gsap.from(".navs a", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2 
  });

  gsap.from("nav .bars", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: 0.2 
  });
  gsap.from("section", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 2,
    stagger: 0.2 
  });
  gsap.from(".features", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 2.2,
    stagger: 0.2 
  });
  gsap.from(".wid", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 2.2,
    stagger: 0.2 
  });
  gsap.from("#features-card-1", {
    y:-600,
    x:-600,
    opacity: 0,
    duration: 1,
    delay: 2.2
    
  });
  gsap.from("#features-card-2", {
    
    y:-300,
    opacity: 0,
    duration: 1,
    delay: 2.2
    
  });
  gsap.from("#features-card-3", {
    x:600,
    y:-600,
    opacity: 0,
    duration: 1,
    delay: 2.2
    
  });
  gsap.from("#features-card-4", {
    y:600,
    x:-600,
    opacity: 0,
    duration: 1,
    delay: 2.2
    
  });
  gsap.from("#features-card-5", {
    x:300,
    opacity: 0,
    duration: 1,
    delay: 2.2
    
  });
  gsap.from("#features-card-6", {
    x:600,
    y:600,
    opacity: 0,
    duration: 1,
    delay: 2.2
    
  });



//   const cards = document.querySelectorAll('.features-card');

// Loop through each card and apply animation
// cards.forEach((card, index) => {
//     // Set initial position of card
//     gsap.set(card, { y: -100, opacity: 0 });

//     // Animate card to slide down from top
//     gsap.to(card, {
//         duration: 1,
//         y: 0,
//         opacity: 1,
//         delay: index * 0.2, // Add a delay to stagger the animations
//         ease: 'power2.out' // Apply easing
//     });
// });
  

  


