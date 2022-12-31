// random value generated
var y = Math.floor(Math.random() * 10 + 1);
  
// counting the number of guesses
// made for correct Guess
var guess = 1;
document.getElementById("submit").onclick = function(){

  // number guessed by user    
    var x = document.getElementById("guessField").value;

    if(x == y)
    {    
      alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS ");
    }
    else if(x > y) /* if guessed number is greater than actual number*/
    {    
      guess++;
      alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else
    {
      guess++;
      alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }

}

function playAgain(){
  y = Math.floor(Math.random() * 10 + 1);
}

