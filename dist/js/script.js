"use strict";

var header = document.querySelector(".header");
var navbar = document.querySelector(".navbar");
var menuOpen = document.querySelector(".navbar__toggle--icon-open");
var menuClose = document.querySelector(".navbar__toggle--icon-close");
var menu = document.querySelector(".mobile__menu");
var toggle = document.querySelector(".navbar__toggle");
var links = document.querySelectorAll(".mobile__menu--link");
var open = function open() {
  menuOpen.classList.add("hidden");
  menuClose.classList.remove("hidden");
  menu.style.transform = "translateX(0)";
};
var close = function close() {
  menuOpen.classList.remove("hidden");
  menuClose.classList.add("hidden");
  menu.style.transform = "translateX(100%)";
};
menuOpen.addEventListener("click", open);
menuClose.addEventListener("click", close);
links.forEach(function (link) {
  link.addEventListener("click", close);
});

//FIxed Navigation on scroll

var initialPos = header.getBoundingClientRect().top;
window.addEventListener("scroll", function (e) {
  var curr = header.getBoundingClientRect().top;
  if (curr < initialPos) navbar.classList.add("fixed");else navbar.classList.remove("fixed");
});