// Random image for first dice
var randomNumber1 = Math.floor((Math.random() * 6));
var img = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var ranImg = img[randomNumber1];
document.querySelector(".first img").setAttribute("src", ranImg);

// Random image for second dice
var randomNumber2 = Math.floor((Math.random() * 6));
var img2 = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var ranImg2 = img2[randomNumber2];
document.querySelector(".second img").setAttribute("src", ranImg2);

// Changing the text based on which player wins
if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerText="Player 1 Wins!";
}

else if(randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].innerText="Player 2 Wins!";
}

else{
    document.getElementsByTagName("h1")[0].innerText="Draw!";
}