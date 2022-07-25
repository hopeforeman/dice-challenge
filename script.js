var randomNumber1;

randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber1);

/* FIRST DICE*/
// images/dice[randomNumber1].png
var randomDice1 = "images/dice" + randomNumber1 + ".png"
console.log(randomDice1);

document.querySelectorAll("img")[0].setAttribute("src", randomDice1); //= randomDice;

/* SECOND DICE*/
randomNumber2 = Math.floor((Math.random() * 6) + 1);
console.log(randomNumber2);

var randomDice2 = "images/dice" + randomNumber2 + ".png"
console.log(randomDice2);

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

/* ANNOUCE WINNER */

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName("h1").innerHTML = "Player 1 is the winner!";
} else if (randomNumber1 < randomNumber2) {
    document.getElementsByTagName("h1").innerHTML = "Player 2 is the winner!";
} else {
    document.getElementsByTagName("h1").innerHTML = "It's a tie!";
}
