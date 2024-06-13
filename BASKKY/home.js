$(document).ready(() => {
  console.log("Hola");
});

const toggleBtn = $(".toggle-btn");
const toggleBtnIcon = $(".toggle-btn i");
const dropDownMenu = $(".dropdown");

toggleBtn.on("click", () => {
  dropDownMenu.toggleClass("open");
  const isOpen = dropDownMenu.hasClass("open");

  toggleBtnIcon
    .removeClass("fa-xmark fa-bars")
    .addClass(isOpen ? "fa-xmark" : "fa-bars");
});
