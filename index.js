// document.querySelectorAll("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });

// solution for adding event listener to all buttons with class "drum"
const btns = document.querySelectorAll(".drum");

// btns.forEach(btn => {
//    btn.addEventListener("click", function () {
//      // alert("I got clicked!");
//      console.log("I got clicked!");
//    });
// });

// solution from Udemy
function playSound(keySound) {
  switch (keySound) {
    case "w":
      // console.log("Clicked w!");
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "s":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(keySound);
  }
}

// add button animation to the clicked
function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100)
}

// event listener: for clicking the sound button
for (i = 0; i < btns.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      // alert("I got clicked!");
      // console.log(this);
      // this.style.color = "white";

      var buttonInnerHTML = this.innerHTML;
      // console.log(buttonInnerHTML);

      playSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    }
  );
}

// event listener: for pressing the keyboard button
// listen for all keystrokes with "document"
document.addEventListener("keydown", function (event) {
  // console.log("Key was pressed");
  // console.log(event);
  var keyPressed = event.key;

  playSound(keyPressed);

  buttonAnimation(keyPressed);

});
