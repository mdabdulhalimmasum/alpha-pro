function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
}

function getRandomAlphabet(){
    //create alphabets array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    //create random number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const  alphabet = alphabets[index];
    //console.log(index, alphabet);
    return alphabet;
}

function getTextElementValueById(elementId){
    const currentElement = document.getElementById(elementId);
    const currentValue = currentElement.innerText;
    const value = parseInt(currentValue);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}