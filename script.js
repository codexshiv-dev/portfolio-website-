const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const themeToggle = document.querySelector("#theme-toggle");
const body = document.body;

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

themeToggle.onclick = () => {
  body.classList.toggle("light-mode");
  themeToggle.classList.toggle("bx-sun");
  themeToggle.classList.toggle("bx-moon");
};
