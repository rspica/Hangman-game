


//-------------------------------------------------------
//---------------  **Global Variables**  ----------------
//-------------------------------------------------------

	// counter for number of turns player can make
		var chanceCount = 6;

	// stores list of hangman word to chose from
		var hangmanWord = ["hangman word-1", "another hangman word", "hangman word-number 3", "hangman word-4 and so on"];

	//  Create a random number based on array length (this is the index location of letter in array)
	    var hangmanWordSelector = Math.floor(Math.random() * hangmanWord[].length + 1);

	// stores character count (string length) of hangman word randomly selected
		var wordLength = hangmanWord[hangmanWordSelector].length

	// stores letters the player has guessed
		var playerGuess = [];




    console.log("hangman number selection " + hangmanWordSelector);
    console.log("hangman word selection " + hangmanWord[hangmanWordSelector]);
    console.log("hangman word length " + wordLength);

//-------------------------------------------------------
//----------------  **Get Variables**  ------------------
//-------------------------------------------------------

	// screen display: players lives left -- number of player guesses
		var showLives = document.getElementById("showLives");

	// screen display: letters chosen by player
		var letterGuessed = document.getElementById("letterGuessed");

	// screen display: letter placeholder
		var h_manWordLength = document.getElementById("h_manWordLength");


//-------------------------------------------------------
//---------------  **Global FUnctions**  ----------------
//-------------------------------------------------------


	    document.getElementById("id-name").innerHTML = Array[0];
	    //     guessedLetter = document.createElement('div');
        //     guessedLetter.setAttribute('class', 'guessedLtr');


	// array for list or words to be used


	// computer to select a word at random from a list







	// count number of letters in random word selected and display the total number of letter spaces 
	// in the word on screen 

	// show user the number of guesses remaining for the word //hanging man has 6 parts//
	// a letter is only counted and recorded once

	// show letters already guessed, do not show dupiclate guesses. 

	// 

