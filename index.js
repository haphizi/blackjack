let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
  name: "Matt",
  chips: 120,
  // sayHello: function () {
  //   console.log("konichiwa!");
  // },
};

// player.sayHello();
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  // if 1     -> return 11
  // if 11-13 -> return 10

  let randomizer = Math.floor(Math.random() * 13) + 1;

  if (randomizer === 1) {
    return 11;
  } else if (randomizer > 10) {
    return 10;
  } else {
    return randomizer;
  }
}

function startGame() {
  isAlive = true;
  // Generate two random numbes
  // Re-assign the cards and sum variables so that the game can start
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards.push(firstCard);
  cards.push(secondCard);
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

//practice

// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime() {
//   if (player1Time < player2Time) {
//     return player1Time;
//   } else if (player2Time < player1Time) {
//     return player2Time;
//   } else {
//     return player1Time;
//   }
// }

// let fastestRace = getFastestRaceTime();
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

// function getTotalRaceTime() {
//   let totalRaceTime = player1Time + player2Time;

//   return totalRaceTime;
// }
// let totalTime = getTotalRaceTime();
// console.log(totalTime);

// Math.random() practice

// let randomNumber = Math.random() * 6;
// console.log(randomNumber)

/* 

What does Math.random() do?

Your answer: generate a floating point number between 0 and 1 ( not inclusive of 1)

Math.random() * 6;
ans: random no. from 0 to 5.9999( not inclusive 6)

*/

// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)

/* 

What does Math.floor() do to positive numbers?

Your answer: round down to the nearest integer

*/

// Create a function, rollDice(), that returns a random number between 1 and 6
// function rollDice() {
//   let randomNumber = Math.floor(Math.random() * 6) + 1;
//   return randomNumber;
// }

// console.log(rollDice());

/* 

Write down all the possible values randomNumber can hold now!

 0,1,2,3,4,5,6


*/

// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate....")
// }

// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//   showSolution();
// }

// function showSolution() {
//   console.log("Showing the solution....");
// }

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

// let likesDocumentaries = true;
// let likesStartups = false;

// if (likesDocumentaries || likesStartups) {
//   recommendMovie();
// }
// function recommendMovie() {
//   console.log("Hey, check out this new film we think you will like!");
// }

// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log( course.tags )

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

// let listing = {
//   title: "Duplex room",
//   price: 209,
//   isSuperhost: false,
//   images: ["img/castle1.png", "img/castle2.png"],
// };

// console.log(listing.price);
// console.log(listing.isSuperhost);

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person = {
//   name: "Hafiz",
//   age: 33,
//   country: "Singapore",
// };

// function logData() {
//   console.log(
//     person.name +
//       " is " +
//       person.age +
//       " years old and lives in " +
//       person.country
//   );
// }

// logData();

let age = 5;

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// if (age < 6) {
//   console.log("free of charge");
// } else if (age >= 6 && age <= 17) {
//   console.log("child discount");
// } else if (age >= 18 && age <= 26) {
//   console.log("student discount");
// } else if (age >= 27 && age <= 66) {
//   console.log("full price");
// } else {
//   console.log("senior citizen discount");
// }

// if (age < 6) {
//   console.log("free")
// } else if (age < 18) {
//   console.log("child discount")
// } else if (age < 27) {
//   console.log("student discount")
// } else if (age < 67) {
//   console.log("full price")
// } else {
//   console.log("senior citizen discount")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

// console.log("The 5 largest countries in the world:");

// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
// largeCountries.shift()
// largeCountries.unshift("China")
// largeCountries.pop();
// largeCountries.push("Pakistan")
// console.log(largeCountries)

// let dayOfMonth = 31
// let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
// if(dayOfMonth === 13 && weekday === "Friday") {
//   console.log("😱")
// }

// let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

// function randomizer() {
//   let randomNumber = Math.floor(Math.random() * 3); // gives a random no. 0-1-2
//   return console.log(hands[randomNumber]);
// }

// randomizer();
