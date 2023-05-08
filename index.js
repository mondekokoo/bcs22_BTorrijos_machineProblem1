var guess = prompt("Enter a Number\n")
var ans = Math.floor(Math.random() * 101);

var tries = 1;
var maxTries = 5;

while(guess != ans && tries < maxTries){
    if(guess > ans){
        guess = prompt("Too high guess again. Tries left: " + (maxTries - tries) + "\n")

    }else{
        guess = prompt("Too low guess again. Tries left: " + (maxTries - tries) + "\n")
    }
    tries++;
}

if(guess == ans){
    alert("You guessed the guessing game. Your number of tries is: " + tries);
} else {
    alert("Sorry, you did not guess the number in " + maxTries + " tries. The number was " + ans);
}

