// Need to add ace logic for dealer 
// something going on with the dealerFinish function ... possibly in connection with the addDealer function
// not hitting on a soft 17, and not hitting more than once even if dealerScore < 17
// need to add hide/reveal logic for dealer
// need to add a fuckload of css
// need to add card images



let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let cards = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
let deck = [];
let dealer = [];
let dealerHand = [];
let dealerScore = 0;
let dealerAltScore = 0;
let dealerFinal = false;
let player = [];
let playerHand = [];
let playerScore = 0;
let playerAltScore = 0;
let playerFinal = false;
let gamesPlayed = 0;
let gamesWon = 0;
let gamesPushed = 0;
window.onload = newGame();
document.getElementById("d-score").innerHTML = `Dealer Score: ${dealerScore}`;
document.getElementById("p-score").innerHTML = `Player Score: ${playerScore}`;
document.getElementById("d-hand").innerHTML = `Dealer Hand: ${dealerHand}`;
document.getElementById("p-hand").innerHTML = `Player Hand: ${playerHand}`;
document.getElementById("hitButton").addEventListener("click", hit);
document.getElementById("stayButton").addEventListener("click", dealerFinish);


function confirmer(str) {
    if (confirm(`${str}\nWould you like to play again?`)) {
        newGame();
    }

}
function win() {
    gamesPlayed++;
    gamesWon++;
    document.getElementById("gamesPlayed").innerHTML = `Games Played: ${gamesPlayed}`
    document.getElementById("gamesWon").innerHTML = `Games Won: ${gamesWon}`
}
function lose() {
    gamesPlayed++;
    document.getElementById("gamesPlayed").innerHTML = `Games Played: ${gamesPlayed}`
    document.getElementById("gamesWon").innerHTML = `Games Won: ${gamesWon}`
}
function pushGame() {
    gamesPlayed++;
    gamesPushed++;
    document.getElementById("gamesPlayed").innerHTML = `Games Played: ${gamesPlayed}`
    document.getElementById("gamesWon").innerHTML = `Games Won: ${gamesWon}`
    document.getElementById("gamesPushed").innerHTML = `Games Pushed: ${gamesPushed}`
}
function newGame() {
    reset();
    createDeck();
}
function reset() {
    dealer = [];
    dealerHand = [];
    dealerScore = 0;
    dealerAltScore = 0;
    dealerFinal = false;
    player = [];
    playerHand = [];
    playerScore = 0;
    playerAltScore = 0;
    playerFinal = false;
    document.getElementById("d-score").innerHTML = `Dealer Score: ${dealerScore}`;
    document.getElementById("p-score").innerHTML = `Player Score: ${playerScore}`;
    document.getElementById("d-hand").innerHTML = `Dealer Hand: ${dealerHand}`;
    document.getElementById("p-hand").innerHTML = `Player Hand: ${playerHand}`;
    addDealButton();
}

function addDealButton() {
    let dealButton = document.createElement("button");
    dealButton.setAttribute("id", "dealButton");
    document.getElementById("dealDiv").appendChild(dealButton);
    document.getElementById("dealButton").addEventListener("click", deal);
    document.getElementById("dealButton").innerHTML = "Deal";
}

function deal() {
    dealer.push(deck.pop());
    dealer.push(deck.pop());
    player.push(deck.pop());
    player.push(deck.pop());
    calculate();
    document.getElementById("dealButton").remove();
    setTimeout(checkPlayer, 750);
}


function addDealer() {
    dealer.push(deck.pop());
    calculate();
}

function hit() {
    player.push(deck.pop());
    calculate();
    setTimeout(checkPlayer, 750);
}

function checkPlayer() {
    if (playerScore === 21 || playerAltScore === 21) {
        confirmer(`Blackjack! You hit 21!`);
        win();
        return;
    }
    if (playerScore > 21) {
        confirmer(`You bust! You had ${playerScore}!`);
        lose();
        return;
    }
}

function settlePlayer() {
    if (playerAltScore <= 21 && playerAltScore > 0) {
        playerScore = playerAltScore;
        playerFinal = true;
    }
    document.getElementById("p-score").innerHTML = `Player Score: ${playerScore}`;
}

function dealerFinish() {
    settlePlayer();
    while (dealerAltScore > 0 && dealerAltScore <= 17) {
        addDealer();
    }
    while ((dealerAltScore > 21 || dealerAltScore === 0) && dealerScore < 17){
        addDealer();
    }
    if(dealerAltScore <= 21 && dealerAltScore > 0){
        dealerScore = dealerAltScore;
    }
    document.getElementById("d-score").innerHTML = `Dealer Score: ${dealerScore}`;
    dealerFinal = true;
    setTimeout(gameEnd, 750);
}
function gameEnd() {
    if (dealerScore > 21) {
        confirmer(`You win! Dealer busts with ${dealerScore}`);
        win();
        return;
    }
    if (playerScore < dealerScore) {
        confirmer(`Dealer wins with ${dealerScore}`);
        lose();
        return;
    }
    if (playerScore > dealerScore) {
        confirmer(`You win with ${playerScore}`);
        win();
        return;
    }
    if (playerScore === dealerScore) {
        confirmer(`Push! You and the dealer both had ${playerScore}`);
        pushGame();
        return;
    }

}

function calculate() {
    function scoreReducer(acc, cv) {
        if (acc.value) {
            return acc.value + cv.value;
        }
        else { return acc + cv.value }
    };
    dealerScore = dealer.reduce(scoreReducer);
    playerScore = player.reduce(scoreReducer);

    dealer.forEach((cv, idx) => {
        dealerHand[idx] = `${cv.card} of ${cv.suit}`;
    });
    player.forEach((cv, idx) => {
        playerHand[idx] = `${cv.card} of ${cv.suit}`;
    });
    if (dealer.some((cv) => {
        return cv.card === "Ace";
    }) && dealerFinal === false) {
        dealerAltScore = dealerScore + 10;
        document.getElementById("d-score").innerHTML = `Dealer Score: ${dealerScore}/${dealerAltScore}`;
    }
    else {
        document.getElementById("d-score").innerHTML = `Dealer Score: ${dealerScore}`;
    }
    if (player.some((cv) => {
        return cv.card === "Ace";
    }) && playerFinal === false) {
        playerAltScore = playerScore + 10;
        if (playerAltScore <= 21) {
            document.getElementById("p-score").innerHTML = `Player Score: ${playerScore}/${playerAltScore}`;
        }
        else {
            document.getElementById("p-score").innerHTML = `Player Score: ${playerScore}`;
        }
    }
    else {
        document.getElementById("p-score").innerHTML = `Player Score: ${playerScore}`;
    }

    document.getElementById("d-hand").innerHTML = `Dealer Hand: ${dealerHand}`;
    document.getElementById("p-hand").innerHTML = `Player Hand: ${playerHand}`;
}
function createDeck() {
    let suitCount = 0;
    let cardValCount = 0;
    for (let i = 0; i < 52; i++) {
        if (suitCount === 4) {
            suitCount = 0;
        }
        if (cardValCount === 13) {
            cardValCount = 0;
        }
        deck[i] = { suit: suits[suitCount] };
        deck[i].card = cards[cardValCount];
        deck[i].value = values[cardValCount];
        suitCount++;
        cardValCount++;
    }
    let j = 0
    let temp = null
    for (let i = deck.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
}

console.log(player, playerScore);
console.log(dealer, dealerScore);

