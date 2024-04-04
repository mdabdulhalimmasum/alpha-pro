/*
function play(){
    //step-1: hide the home screen
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');
    //step-2: add the play-ground
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

}
*/
function continueGame(){
    const alphabets = getRandomAlphabet();
    //console.log('your alphabet', alphabets);

    //generate random alphabets
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabets;

    //add background color
    addBackgroundColorById(alphabets);
}
//game start
function play(){
    hideElementById('home');
    showElementById('play-ground');
    //play again
    hideElementById('final-score');

    //restore score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}
//game over
function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');

   //update the final score
   const lastScore = getTextElementValueById('current-score');
   console.log(lastScore);
   setTextElementValueById('last-score', lastScore);

   //clear the last alphabet highlight
   const highlightAlphabet = getElementTextById('current-alphabet');
   console.log(highlightAlphabet);
   removeBackgroundColorById(highlightAlphabet);

}



function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    //console.log(playerPressed, expectedAlphabet);
    
    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you have pressed correctly!!', expectedAlphabet);
        console.log('you get a point');
        //start new round
        removeBackgroundColorById(expectedAlphabet);

        //update score
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        /*
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreValue = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreValue);
        //console.log(currentScore);

        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        */

        continueGame();
    }
    else{
        console.log('you make mistake so you lost life');
         //update life score
         const currentLife = getTextElementValueById('current-life');
         const newLife = currentLife - 1;
         setTextElementValueById('current-life', newLife);

        /*
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeValue = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeValue);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        */

        if(newLife === 0){
            gameOver();
        }
    }
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)