// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.
var counter = 0;

var minus50btn = document.getElementById("minus50");
var displayE1 = document.getElementById("display");
var minus10btn = document.getElementById("minus10");
var minus1btn = document.getElementById("minus1");
var plus1btn = document.getElementById("plus1");
var plus10btn = document.getElementById("plus10");
var plus50btn = document.getElementById("plus50");

//String sStory
var stringInEL = document.getElementById("strIn");
var story = "Once apon a time, ";
var storyEL = document.getElementById("strOut");
var roundBtn1 = document.getElementById("rand1");
var roundBtn2 = document.getElementById("rand2");
var roundBtn3 = document.getElementById("rand3");

var picBtn = document.getElementById("pic-btn");
var picContainer = document.getElementById("pic-container");
var resetBtn = document.getElementById("reset");
var toyBtn = document.getElementById("toy-btn");
var toyContainer = document.getElementById("toy-container");
var rand1inp = document.getElementById("rand-in1");
var rand2inp = document.getElementById("rand-in2");
var rand4btn = document.getElementById("rand4");

//Event Litsner
minus50btn.addEventListener("click", minus50fcn);
minus10btn.addEventListener("click", minus10fcn);
minus1btn.addEventListener("click", minus1fcn);
plus1btn.addEventListener("click", plus1fcn);
plus10btn.addEventListener("click", plus10fcn);
plus50btn.addEventListener("click", plus50fcn);

//String INcrement
stringInEL.addEventListener("change", updatedStory);
roundBtn3.addEventListener("click", round3);
rand4btn.addEventListener("click", round4);
resetBtn.addEventListener("click", resetPage);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// Event Funciton
function minus50fcn() {
  //update counter
  counter = counter - 50;

  //Update site
  displayE1.innerHTML = counter;
}

function minus10fcn() {
  //update counter
  counter = counter - 10;

  //Update site
  displayE1.innerHTML = counter;
}

function minus1fcn() {
  //update counter
  counter = counter - 1;

  //Update site
  displayE1.innerHTML = counter;
}

function plus1fcn() {
  //update counter
  counter = counter + 1;

  //update site
  displayE1.innerHTML = counter;
}

function plus10fcn() {
  //update counter
  counter = counter + 10;
  //update site
  displayE1.innerHTML = counter;
}

function plus50fcn() {
  //update counter
  counter = counter + 50;
  //update site
  displayE1.innerHTML = counter;
}

//Stering INcrememnt
function updatedStory() {
  //save the user's word to a varibale
  var word = stringInEL.value;

  //Update the story variable
  story += word + " ";
  console.log(story);

  // c;lear the inout fiel
  stringInEL.value = "";

  //Update the site to story\
  storyEL.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);

function round1() {
  // cCreate radonom decimal 0-1
  let rand = Math.random();

  //Round to 3 decimal palces
  rand = rand.toFixed(3);
  console.log(rand);
  //updae site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;

  rand = Math.round(rand);

  document.getElementById("rand2-out").innerHTML = rand;
}

// radom # from x to y:
// Math.random() * (y-x) + x
///E.g. If i want a random number from 1 to 3:
//var rand = Math.random() * (3 - 1) + 1;
// rand =  Math.round(rand);

function round3() {
  // -5 to 5
  // var rand = Math.random() * (5-(-5)) + (-5)
  var rand = Math.random() * 10 - 5;
  rand = Math.round(rand);
  console.log(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function round4() {
  // Input: save 2 inputs as numbers into variables.  .value always thinks "string"
  //  Number(document.getElementById("thing").value)
  var userNum1 = Number(document.getElementById("rand-in1").value);
  var userNum2 = Number(document.getElementById("rand-in2").value);

  // Process:  Create the random number
  // Use formula:  Math.random() * (y-x) + x
  rand4btn = Math.random() * (userNum2 - userNum1) + userNum1;

  // Output
  document.getElementById("rand4-out").innerHTML = rand4btn;
}

picBtn.addEventListener("click", addcandy);

function addcandy() {
  // Every click, add another antoher candy
  picContainer.innerHTML += "<img width=50px  src= 'images/choclate.jpg'>";
}

function resetPage() {
  location.reload(resetBtn);
}

toyBtn.addEventListener("click", favToy);

function favToy() {
  toyContainer.innerHTML += "<img width='50px'  src= 'images/toy.jpg'>";
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
//5. code the reset button this i=will set all variables
// tabck to inital values and clera out all
//6. Create a button that when pressed, add
// an image of your favporite toy to the website

var randRgb = document.getElementById("random-rgb");
randRgb.addEventListener("click", randClr);

function randClr() {
  let red = Math.random() * 255;
  red = Math.round(red);

  let blue = Math.random() * 255;
  blue = Math.round(blue);

  let green = Math.random() * 255;
  green = Math.round(green);

  let myColor = `rgb(${red}, ${green}, ${blue})`;
  console.log(myColor);

  document.getElementById("HTML").style.backgroundColor = myColor;

  document.getElementById("random-rgb").innerHTML = myColor;
}

var randSize = document.getElementById("random-size");
randSize.addEventListener("click", randSze);

function randSze() {
  var minSize = 10;
  var maxSize = 50;

  var randomSize =
    Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;

  document.getElementById("bodytext").style.fontSize = randomSize + "px";

  document.getElementById("random-size").innerHTML = randomSize;
}
