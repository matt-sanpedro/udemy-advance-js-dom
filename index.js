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
for (i = 0; i < btns.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // alert("I got clicked!");
    console.log("I got clicked!");
  });;
}
