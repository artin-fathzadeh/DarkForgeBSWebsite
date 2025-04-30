const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// Enhancements for mobile UX/UI
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navdiv ul');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
  });

  // Smooth transitions for menu toggling
  navLinks.style.transition = 'transform 0.3s ease-in-out';
  navLinks.addEventListener('transitionend', () => {
    if (!navLinks.classList.contains('active')) {
      navLinks.style.transform = 'translateX(-100%)';
    } else {
      navLinks.style.transform = 'translateX(0)';
    }
  });
});
