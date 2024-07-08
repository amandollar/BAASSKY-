document.addEventListener("DOMContentLoaded", function () {
    window.createCard = function(previewImage, heading, previewPath) {
        let html = `
        <div class="template">
            <img src="${previewImage}" alt="Background img">
            <p>${heading}</p>
            <div class="btn">
                <a href="${previewPath}" target="_blank">Preview</a>
                <a href="">Get code</a>
            </div>
        </div>`;
        document.querySelector(".content").innerHTML += html;
    };

    // Add initial cards if needed
    // eg --> createCard("/Components/Buttons/assets/blob-btn.png", "Blob Button", "/Components/Buttons/Blob Button/index.html");
});
