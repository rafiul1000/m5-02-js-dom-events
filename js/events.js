// option: 1 ===>> directly set set on the HTML element
/* <button onclick="console.log(65)">Another Button</button> */

// ===============================>>>>>><<<<<<<==================================
// option: 2 ===>> add onclick function on the HTML element
// [we will use this sometime]
// most used function
/* <button onclick="makeRed()">Make Red</button> */

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// ===============================>>>>>><<<<<<<==================================

// option: 3 ===>> add onclick function

const makeBlueButton = document.getElementById("male-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option: 3 another ===>> add onclick function

const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option 4 ===>>
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option 4 another ===>>
const makeGreenButton = document.getElementById("green-button");
makeGreenButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});
// ===============================>>>>>><<<<<<<==================================
// option 4 final version
// important[WE WILL USE THIS MOST OF THE TIME]

// document.getElementById('make-goldenrod').addEventListener('click', function(){});
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });

// ===============================>>>>>><<<<<<<==================================