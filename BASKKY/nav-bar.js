document.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    const logoLink = document.querySelector(".logo a");
    const navLinks = document.querySelectorAll(".nav-bar .links a");
  
    if (window.scrollY > 200) {
      header.classList.add("scrolled");
      logoLink.classList.add("scrolled");
      navLinks.forEach(link => link.classList.add("scrolled"));
    } else {
      header.classList.remove("scrolled");
      logoLink.classList.remove("scrolled");
      navLinks.forEach(link => link.classList.remove("scrolled"));
    }
  });