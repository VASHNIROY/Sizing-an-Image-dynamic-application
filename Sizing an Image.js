let imageElement = document.getElementById("image");
let imageWidth = document.getElementById("imageWidth");

let originalImageWidth = 200;
let maxImageWidth = 300;
let minImageWidth = 100;
let defaulImageWo
imageElement.style.width = originalImageWidth + "px";
let warningMessage = document.getElementById("warningMessage");

function incrementButton() {
    if (originalImageWidth >= maxImageWidth) {
        warningMessage.textContent = "Too Big Decrease the size of the image";
    } else {
        originalImageWidth = originalImageWidth + 5;
        imageElement.style.width = originalImageWidth + "px";
        imageWidth.textContent = originalImageWidth + "px";
        warningMessage.textContent = ""
        console.log(originalImageWidth);

    }
}

function decrementButton() {
    if (originalImageWidth <= minImageWidth) {
        warningMessage.textContent = "Can't Visible increase the size of the image";
    } else {
        originalImageWidth = originalImageWidth - 5;
        imageElement.style.width = originalImageWidth + "px";
        warningMessage.textContent = ""
        imageWidth.textContent = originalImageWidth + "px";
        console.log(originalImageWidth);

    }
}