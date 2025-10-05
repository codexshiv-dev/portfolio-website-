/* Toggle Menu */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/* Scroll Active Link + Sticky Navbar */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // sticky header
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle when clicking nav link
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* ScrollReveal Animations */
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services, .portfolio, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about', { origin: 'right' });

/* Typed.js Effect */
const typed = new Typed('.multiple-text', {
  strings: ['Web Developer', 'Cloud Enthusiast','DevOps Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/* Dark / Light Mode Toggle */
let themeToggle = document.querySelector('#theme-toggle');
let body = document.body;

themeToggle.onclick = () => {
  body.classList.toggle('light-mode');

  // switch icon
  if (body.classList.contains('light-mode')) {
    themeToggle.classList.remove('bx-moon');
    themeToggle.classList.add('bx-sun');
  } else {
    themeToggle.classList.remove('bx-sun');
    themeToggle.classList.add('bx-moon');
  }
};
