let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
    name : "Cinta",
    chips : 145
}

let playerEl = document.getElementById("player-el");

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if( randomNumber === 1){
        return 11;
    }
    else if( randomNumber > 10 ){
        return 10
    }
    else{
        return randomNumber;
    }
}

function start(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame(){
    //cardEl.textContent = "Cards : "+ cards[0] + " & " + cards[1];
    cardEl.textContent = "Cards : ";
    for(let i = 0; i < cards.length ;i++){
        cardEl.textContent += cards[i] + " ";
    }
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "You've got Blackjack!";
        hasBlackjack = true;
        playerEl.textContent = player.name + " : $" + player.chips;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent ="Sum : "+ sum; 
}

function newCard(){
    if(isAlive && !hasBlackjack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}