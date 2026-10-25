let score = 0;
let answer1 = prompt("What color is the sun? Please enter either A or B to submit your ansswers. A) Blue B) Yellow");

if (answer1 === "Yellow") {
  score++;
  console.log("correct");
} else if (answer1 === "Blue") {
  console.log("Try Again");
} else {
  console.log("Please choose one of the displayed answers.");
}

let answer2 = prompt("What sound does a cow make? Please enter either A or B to submit your ansswers. A) Moo B) Boo");

if (answer2 === "Moo") {
  score++;
  console.log("Correct!");
} else if (answer2 === "Boo") {
  console.log("Spooky! But not quite.");
} else {
  console.log("Please choose one of the displayed answers.");
}

let answer3 = prompt("How many centimeters are in an inch? Please enter either A or B to submit your ansswers. A) 2.54cm B) 254cm");

if (answer3 === "2.54cm") {
  score++;
  console.log("Correct!");
} else if (answer3 === "254cm") {
  console.log("Incorrect!");
} else {
  console.log("What are you doing!");
}

if (score === 3) {
  console.log("Perfect Score!");
} else if (score === 2) {
  console.log("Great Job!");
} else if (score === 1) {
  console.log("You got one right.");
} else {
  console.log("Yikes!");
}

