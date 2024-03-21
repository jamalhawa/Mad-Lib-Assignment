//input
document
  .getElementById("madlibButton1")
  .addEventListener("click", createmadlib1);
document
  .getElementById("madlibButton2")
  .addEventListener("click", createmadlib2);
document.getElementById("finished").addEventListener("click", finished);
document.getElementById("reset").addEventListener("click", reset);

//functions
function createmadlib1() {
  var pluralNoun = document.getElementById("pluralNoun").value;
  var adjective = document.getElementById("adjective").value;
  var ptVerb = document.getElementById("ptVerb").value;
  var noun1 = document.getElementById("noun1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var noun2 = document.getElementById("noun2").value;

  var madlib = `"There are too many ${pluralNoun} on this ${adjective} airplane!", I screamed. "Somebody has to ${ptVerb} on the ${noun1} to solve this problem! Oh no, the ${adjective2} ${noun2} is coming!`;
  //output
  document.getElementById("paragraph").innerHTML = madlib;
  document.getElementById("paragraph").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("paragraph").style.borderColor = "Orange";
  document.getElementById("html").style.background = "url(images/plane.jpg)";
  document.getElementById("html").style.backgroundSize = "cover";
}

function createmadlib2() {
  var pluralNoun = document.getElementById("pluralNoun").value;
  var adjective = document.getElementById("adjective").value;
  var ptVerb = document.getElementById("ptVerb").value;
  var noun1 = document.getElementById("noun1").value;
  var adjective2 = document.getElementById("adjective2").value;
  var noun2 = document.getElementById("noun2").value;

  var madlib = `I love playing fortnite with my ${pluralNoun} on this ${adjective} Play Station! Nothing makes me happier than when my character ${ptVerb} on the ${noun1} in the map! Oh no, the ${adjective2} ${noun2} is coming!`;
  //output
  document.getElementById("paragraph").innerHTML = madlib;
  document.getElementById("paragraph").style.fontFamily = "Times New Roman";
  document.getElementById("paragraph").style.borderColor = "Blue";
  document.getElementById("html").style.background = "url(images/Fortnite.png)";
  document.getElementById("html").style.backgroundSize = "cover";
}

// function to display the user's rating of the site
function finished() {
  var rating = parseInt(
    prompt("What do you rate your Mad Lib expirience out of five stars?")
  );
  //output
  document.getElementById(
    "rate"
  ).innerHTML = `${rating} Stars, Thank you for your feedback!`;
}

function reset() {
  var pluralNoun = document.getElementById("pluralNoun");
  var adjective = document.getElementById("adjective");
  var ptVerb = document.getElementById("ptVerb");
  var noun1 = document.getElementById("noun1");
  var adjective2 = document.getElementById("adjective2");
  var noun2 = document.getElementById("noun2");

  document.getElementById("paragraph").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("paragraph").style.borderColor = "Orange";
  document.getElementById("paragraph").innerHTML =
    "There are too many _______ on this _______ airplane!, I screamed. Somebody has to _______ on the _______ to solve this problem! Oh no, the_______ _______ is coming!";
  document.getElementById("html").style.background = "url(images/plane.jpg)";
  document.getElementById("html").style.backgroundSize = "cover";

  pluralNoun.value = "";
  adjective.value = "";
  ptVerb.value = "";
  noun1.value = "";
  adjective2.value = "";
  noun2.value = "";
}
