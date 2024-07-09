const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown");

toggleBtn.addEventListener("click", () => {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtnIcon.classList.remove("fa-xmark", "fa-bars");
  toggleBtnIcon.classList.add(isOpen ? "fa-xmark" : "fa-bars");
});

document.addEventListener("DOMContentLoaded", function() {
  function createCard(previewImage, heading, previewPath, sectionSelector) {
    let html = `
      <div class="template">
        <img src="${previewImage}" alt="Background img">
        <p>${heading}</p>
        <div class="btn">
          <a href="${previewPath}" target="_blank">Preview</a>
          <a href="">Get code</a>
        </div>
      </div>`;
    document.querySelector(sectionSelector + " .contents").innerHTML += html;
  }

  // add templates here--> 
  createCard("../Components/Backgrounds/assets/wave.png", "Dot-Wave-Background", "../Components/Backgrounds/Dot-Wave-Background/index.html", "#backgrounds");
  createCard("../Components/Backgrounds/assets/gradient.png", "Gradient Background", "../Components/Backgrounds/Gradient-Background/index.html", "#backgrounds");
  createCard("../Components/Backgrounds/assets/screensaver.png", "Screensaver Background", "../Components/Backgrounds/Screensaver-Background/index.html", "#backgrounds");
  
  createCard("../Components/Buttons/assets/blob-btn.png", "Blob Button", "../Components/Buttons/Blob Button/index.html", "#buttons");
  createCard("../Components/Buttons/assets/liquid-btn.png", "Liquid button", "../Components/Buttons/Liquid Button/index.html", "#buttons");

  createCard("../Components/form/contact_form/assets/image.png", "Contact page", "../Components/form/contact_form/contact.html", "#forms");
  
});