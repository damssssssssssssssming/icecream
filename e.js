"use strict";

// Select elements
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".img");

// Maximum images and click count
const MAX_IMAGES = 5;
let noCount = 0;
let play = true;  // To control when to stop updating images

// Event listener for 'Yes' button
yesButton.addEventListener("click", handleYesClick);

// Event listener for 'No' button
noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);  // Update image based on number of clicks
    resizeYesButton();  // Make 'Yes' button bigger
    updateNoButtonText();  // Update 'No' button text dynamically
    
    // Stop changing images once max count is reached
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

// Function to handle 'Yes' button click
function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

// Function to resize 'Yes' button on each 'No' click
function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;
  yesButton.style.fontSize = `${newFontSize}px`;
}

// Function to dynamically generate 'No' button messages
function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Please?",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry",
  ];
  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

// Function to change the image source dynamically
function changeImage(image) {
  if (image === "yes") {
    catImg.src = "img/cat-yes.jpg";  // When 'Yes' button is clicked
  } else {
    catImg.src = `img/cat-${image}.jpg`;  // When 'No' button is clicked, update based on noCount
  }
}

// Function to update 'No' button text dynamically
function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
