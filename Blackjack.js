/*
Blackjack game 
By stringzzz, Ghostwarez Co.
4-22-2023
*/

var deck = [
	{ name: 'Ace', value: 11, suit: 'Diamonds', file: 'Images/Ace_Diamonds.png' },
	{ name: 'Ace', value: 11, suit: 'Clubs', file: 'Images/Ace_Clubs.png' },
	{ name: 'Ace', value: 11, suit: 'Hearts', file: 'Images/Ace_Hearts.png' },
	{ name: 'Ace', value: 11, suit: 'Spades', file: 'Images/Ace_Spades.png' },
	{ name: 'King', value: 10, suit: 'Diamonds', file: 'Images/King_Diamonds.png' },
	{ name: 'King', value: 10, suit: 'Clubs', file: 'Images/King_Clubs.png' },
	{ name: 'King', value: 10, suit: 'Hearts', file: 'Images/King_Hearts.png' },
	{ name: 'King', value: 10, suit: 'Spades', file: 'Images/King_Spades.png' },
	{ name: 'Queen', value: 10, suit: 'Diamonds', file: 'Images/Queen_Diamonds.png' },
	{ name: 'Queen', value: 10, suit: 'Clubs', file: 'Images/Queen_Clubs.png' },
	{ name: 'Queen', value: 10, suit: 'Hearts', file: 'Images/Queen_Hearts.png' },
	{ name: 'Queen', value: 10, suit: 'Spades', file: 'Images/Queen_Spades.png' },
	{ name: 'Jack', value: 10, suit: 'Diamonds', file: 'Images/Jack_Diamonds.png' },
	{ name: 'Jack', value: 10, suit: 'Clubs', file: 'Images/Jack_Clubs.png' },
	{ name: 'Jack', value: 10, suit: 'Hearts', file: 'Images/Jack_Hearts.png' },
	{ name: 'Jack', value: 10, suit: 'Spades', file: 'Images/Jack_Spades.png' },
	{ name: 'Ten', value: 10, suit: 'Diamonds', file: 'Images/Ten_Diamonds.png' },
	{ name: 'Ten', value: 10, suit: 'Clubs', file: 'Images/Ten_Clubs.png' },
	{ name: 'Ten', value: 10, suit: 'Hearts', file: 'Images/Ten_Hearts.png' },
	{ name: 'Ten', value: 10, suit: 'Spades', file: 'Images/Ten_Spades.png' },
	{ name: 'Nine', value: 9, suit: 'Diamonds', file: 'Images/Nine_Diamonds.png' },
	{ name: 'Nine', value: 9, suit: 'Clubs', file: 'Images/Nine_Clubs.png' },
	{ name: 'Nine', value: 9, suit: 'Hearts', file: 'Images/Nine_Hearts.png' },
	{ name: 'Nine', value: 9, suit: 'Spades', file: 'Images/Nine_Spades.png' },
	{ name: 'Eight', value: 8, suit: 'Diamonds', file: 'Images/Eight_Diamonds.png' },
	{ name: 'Eight', value: 8, suit: 'Clubs', file: 'Images/Eight_Clubs.png' },
	{ name: 'Eight', value: 8, suit: 'Hearts', file: 'Images/Eight_Hearts.png' },
	{ name: 'Eight', value: 8, suit: 'Spades', file: 'Images/Eight_Spades.png' },
	{ name: 'Seven', value: 7, suit: 'Diamonds', file: 'Images/Seven_Diamonds.png' },
	{ name: 'Seven', value: 7, suit: 'Clubs', file: 'Images/Seven_Clubs.png' },
	{ name: 'Seven', value: 7, suit: 'Hearts', file: 'Images/Seven_Hearts.png' },
	{ name: 'Seven', value: 7, suit: 'Spades', file: 'Images/Seven_Spades.png' },
	{ name: 'Six', value: 6, suit: 'Diamonds', file: 'Images/Six_Diamonds.png' },
	{ name: 'Six', value: 6, suit: 'Clubs', file: 'Images/Six_Clubs.png' },
	{ name: 'Six', value: 6, suit: 'Hearts', file: 'Images/Six_Hearts.png' },
	{ name: 'Six', value: 6, suit: 'Spades', file: 'Images/Six_Spades.png' },
	{ name: 'Five', value: 5, suit: 'Diamonds', file: 'Images/Five_Diamonds.png' },
	{ name: 'Five', value: 5, suit: 'Clubs', file: 'Images/Five_Clubs.png' },
	{ name: 'Five', value: 5, suit: 'Hearts', file: 'Images/Five_Hearts.png' },
	{ name: 'Five', value: 5, suit: 'Spades', file: 'Images/Five_Spades.png' },
	{ name: 'Four', value: 4, suit: 'Diamonds', file: 'Images/Four_Diamonds.png' },
	{ name: 'Four', value: 4, suit: 'Clubs', file: 'Images/Four_Clubs.png' },
	{ name: 'Four', value: 4, suit: 'Hearts', file: 'Images/Four_Hearts.png' },
	{ name: 'Four', value: 4, suit: 'Spades', file: 'Images/Four_Spades.png' },
	{ name: 'Three', value: 3, suit: 'Diamonds', file: 'Images/Three_Diamonds.png' },
	{ name: 'Three', value: 3, suit: 'Clubs', file: 'Images/Three_Clubs.png' },
	{ name: 'Three', value: 3, suit: 'Hearts', file: 'Images/Three_Hearts.png' },
	{ name: 'Three', value: 3, suit: 'Spades', file: 'Images/Three_Spades.png' },
	{ name: 'Two', value: 2, suit: 'Diamonds', file: 'Images/Two_Diamonds.png' },
	{ name: 'Two', value: 2, suit: 'Clubs', file: 'Images/Two_Clubs.png' },
	{ name: 'Two', value: 2, suit: 'Hearts', file: 'Images/Two_Hearts.png' },
	{ name: 'Two', value: 2, suit: 'Spades', file: 'Images/Two_Spades.png' }
];

var cardsDrawn = [];

function drawCard() {
	var matched = true;
	var cardIndex;
	while (matched) {
		var matchFound = false;
		cardIndex = Math.floor(Math.random() * 52);
		for (var i = 0; i < cardsDrawn.length; i++) {
			if (cardIndex == cardsDrawn[i]) {
				matchFound = true;
				break;
			}
		}
		if (matchFound) {
			continue;
		}
		matched = false;
	}
	cardsDrawn.push(cardIndex);
	return deck[cardIndex];
}

var playerTotal = "?";
var playerCredits = 20;
var playerHand = [];
var playerBlackjack = false;
var playerBust = false;
var playerAces = 0;
var playerHit = false;

var playerSplitHand1 = [];
var playerSplitHand2 = [];
var playerSplitHand1Aces = 0;
var playerSplitHand2Aces = 0;
var playerSplitHand1Bust = false;
var playerSplitHand2Bust = false;
var playerSplitHand1Total = "?";
var playerSplitHand2Total = "?";

var dealerTotal = "?";
var dealerHand = [];
var dealerBlackjack = false;
var dealerRevealed = false;
var dealerBust = false;
var dealerAces = 0;
var bet = "?";

function setupRound() {
	cardsDrawn = [];
	playerTotal = "?";
	playerHand = [];
	playerBlackjack = false;
	playerAces = 0;
	playerBust = false;
	playerHit = false;
	
	playerSplitHand1 = [];
	playerSplitHand2 = [];
	playerSplitHand1Aces = 0;
	playerSplitHand2Aces = 0;
	playerSplitHand1Bust = false;
	playerSplitHand2Bust = false;
	playerSplitHand1Total = "?";
	playerSplitHand1Total = "?";
	
	dealerTotal = "?";
	dealerHand = [];
	dealerBlackjack = false;
	dealerRevealed = false;
	dealerBust = false;
	dealerAces = 0;
	bet = "?";
	
	document.getElementById("dealer-total").innerHTML = "Dealer Total: " + "?";
	document.getElementById("dealer-cards").innerHTML = "<img class=\"card\" src=\"Images/Card_Back.png\" alt=\"\" /><img class=\"card\" src=\"Images/Card_Back.png\" alt=\"\" />";
	
	document.getElementById("player-total").innerHTML = "Player Total: ?";
	document.getElementById("player-bet").innerHTML = "Player Bet: ?";
	document.getElementById("player-cards").innerHTML = "<img class=\"card\" src=\"Images/Card_Back.png\" alt=\"\" /><img class=\"card\" src=\"Images/Card_Back.png\" alt=\"\" />";
	
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"placeBet();\">Place Bet</button><input type=\"text\" id=\"bet-input\"></input>";
	
	document.getElementById("text-output").innerHTML = "Player, place your bet.";
}

function placeBet() {
	bet = Number(document.getElementById("bet-input").value);
	if (bet > playerCredits) {
		document.getElementById("text-output").innerHTML = "Insufficient credits for bet!";
		return;
	}
	else if (bet < 0) {
		document.getElementById("text-output").innerHTML = "Bet can't be negative!";
		return;
	}
	else if (bet == 0) {
		document.getElementById("text-output").innerHTML = "Alright, I'll let you play this round with no bet...";
	}
	
	var dealerCard = drawCard();
	dealerHand.push(dealerCard);
	if (dealerCard.name == "Ace") {
		dealerAces++;
	}
	document.getElementById("dealer-cards").innerHTML = "<img class=\"card\" src=\"" + dealerCard.file + "\" alt=\"\" /><img class=\"card\" src=\"Images/Card_Back.png\" alt=\"\" />";
	
	var playerCard1 = drawCard();
	playerHand.push(playerCard1);
	if (playerCard1.name == "Ace") {
		playerAces++;
	}
	document.getElementById("player-cards").innerHTML = "<img class=\"card\" src=\"" + playerCard1.file + "\" alt=\"\" />";
	
	var playerCard2 = drawCard();
	playerHand.push(playerCard2);
	if (playerCard2.name == "Ace") {
		playerAces++;
	}
	document.getElementById("player-cards").innerHTML += "<img class=\"card\" src=\"" + playerCard2.file + "\" alt=\"\" />";
	
	playerTotal = playerCard1.value + playerCard2.value;
	document.getElementById("player-total").innerHTML = "Player Total: " + playerTotal;
	
	document.getElementById("text-output").innerHTML = "Player bet " + bet;
	document.getElementById("player-bet").innerHTML = "Current Bet: " + bet;
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"hit();\">Hit</button><button class=\"button\" onclick=\"stay();\">Stay</button><button class=\"button\" onclick=\"doubleDown();\">Double Down</button>";
	
	if (playerHand[0].name == playerHand[1].name) {
		document.getElementById("buttons").innerHTML += "<button class=\"button\" onclick=\"splitHand();\">Split Hand</button>";
	}
	
	if (playerTotal == 21) {
		document.getElementById("text-output").innerHTML = "Player Blackjack!";
		playerBlackjack = true;
		document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"dealerTurn();\">Continue</button>";
	}
}

function hit() {
	if (!playerHit) {
		playerHit = true;
		document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"hit();\">Hit</button><button class=\"button\" onclick=\"stay();\">Stay</button>";
	}
	var playerCard1 = drawCard();
	playerHand.push(playerCard1);
	if (playerCard1.name == "Ace") {
		playerAces++;
	}
	document.getElementById("player-cards").innerHTML += "<img class=\"card\" src=\"" + playerCard1.file + "\" alt=\"\" />";
	document.getElementById("text-output").innerHTML = "Player drew an " + playerCard1.name + " of " + playerCard1.suit + ".";
	
	playerTotal += playerCard1.value;
	while ((playerTotal > 21) && (playerAces > 0)) {
		playerTotal -= 10;
		playerAces--;
	}
	document.getElementById("player-total").innerHTML = "Player Total: " + playerTotal;
	
	if (playerTotal > 21) {
		playerBust = true;
		document.getElementById("text-output").innerHTML += " Player busts!";
		document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWin();\">Continue</button>";
	}
}

function stay() {
	document.getElementById("text-output").innerHTML = "Player is staying on " + playerTotal + ".";
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"dealerTurn();\">Continue</button>";
}

function doubleDown() {
	if (bet * 2 > playerCredits) {
		document.getElementById("text-output").innerHTML = "Insufficient credits to double down!";
		return;
	}
	
	bet *= 2;
	document.getElementById("player-bet").innerHTML = "Current Bet: " + bet;
	var playerCard1 = drawCard();
	playerHand.push(playerCard1);
	if (playerCard1.name == "Ace") {
		playerAces++;
	}
	document.getElementById("player-cards").innerHTML += "<img class=\"card\" src=\"" + playerCard1.file + "\" alt=\"\" />";
	document.getElementById("text-output").innerHTML = "Player drew an " + playerCard1.name + " of " + playerCard1.suit + ".";
	
	playerTotal += playerCard1.value;
	while ((playerTotal > 21) && (playerAces > 0)) {
		playerTotal -= 10;
		playerAces--;
	}
	document.getElementById("player-total").innerHTML = "Player Total: " + playerTotal;
	
	if (playerTotal > 21) {
		playerBust = true;
		document.getElementById("text-output").innerHTML += " Player busts!";
		document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWin();\">Continue</button>";
		return;
	}
	
	document.getElementById("text-output").innerHTML += " Player has " + playerTotal + " on a double down.";
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"dealerTurn();\">Continue</button>";	
}

function dealerTurn() {
	if (!dealerRevealed) {
		dealerRevealed = true;
		var dealerCard2 = drawCard();
		dealerHand.push(dealerCard2);
		if (dealerCard2.name == "Ace") {
			dealerAces++;
		}
		document.getElementById("dealer-cards").innerHTML = "<img class=\"card\" src=\"" + dealerHand[0].file + "\" alt=\"\" /><img class=\"card\" src=\"" + dealerCard2.file + "\" alt=\"\" />";
		
		dealerTotal = dealerHand[0].value + dealerCard2.value;
		if (dealerTotal == 21) {
			document.getElementById("dealer-total").innerHTML = "Dealer Total: 21";
			document.getElementById("text-output").innerHTML = "Dealer Blackjack!";
			dealerBlackjack = true;
			
			if (playerSplitHand1.length > 0) {
				document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWinSplitHands();\">Continue</button>";
				document.getElementById("dealer-total").innerHTML = "Dealer Total: " + dealerTotal;
				return;
			}
			else {
				document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWin();\">Continue</button>";
				document.getElementById("dealer-total").innerHTML = "Dealer Total: " + dealerTotal;
				return;
			}
		}
	}
	
	if (dealerTotal <= 16) {
		var dealerCard = drawCard();
		dealerHand.push(dealerCard);
		if (dealerCard.name == "Ace") {
			dealerAces++;
		}
		document.getElementById("dealer-cards").innerHTML += "<img class=\"card\" src=\"" + dealerCard.file + "\" alt=\"\" />";
		document.getElementById("text-output").innerHTML = "Dealer drew a " + dealerCard.name + " of " + dealerCard.suit + ".";
		
		dealerTotal += dealerCard.value;
		while ((dealerTotal > 21) && (dealerAces > 0)) {
			dealerTotal -= 10;
			dealerAces--;
		}
		
		if (dealerTotal > 21) {
			dealerBust = true;
			document.getElementById("text-output").innerHTML += " Dealer busts!";
			if (playerSplitHand1.length > 0) {
				document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWinSplitHands();\">Continue</button>";
				document.getElementById("dealer-total").innerHTML = "Dealer Total: " + dealerTotal;
				return;
			}
			else {
				document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWin();\">Continue</button>";
			}
		}
	}
	else {
		document.getElementById("text-output").innerHTML = "Dealer is staying on " + dealerTotal + ".";
		
		if (playerSplitHand1.length > 0) {
			document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWinSplitHands();\">Continue</button>";
			document.getElementById("dealer-total").innerHTML = "Dealer Total: " + dealerTotal;
			return;
		}
		else {
			document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"judgeWin();\">Continue</button>";
		}
	}
	document.getElementById("dealer-total").innerHTML = "Dealer Total: " + dealerTotal;
}

function judgeWin() {
	if (playerBlackjack) {
		if (dealerBlackjack) {
			document.getElementById("text-output").innerHTML = "Push!";
		}
		else {
			document.getElementById("text-output").innerHTML = "Player wins by blackjack!";
			playerCredits += Math.floor(bet * 1.5);
			document.getElementById("player-credits").innerHTML = "Player Credits: " + playerCredits;
		}
	}
	else if (dealerBlackjack || (playerTotal < dealerTotal && !dealerBust) || playerBust) {
		document.getElementById("text-output").innerHTML = "Player Loses!";
		playerCredits -= bet;
		document.getElementById("player-credits").innerHTML = "Player Credits: " + playerCredits;
		
		if (playerCredits == 0) {
			document.getElementById("text-output").innerHTML += " Player is out of credits!";
			playerCredits = 20;
			document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"setupRound();\">Start New Game</button>";
			return;
		}
	}
	else if (playerTotal > dealerTotal || dealerBust) {
		document.getElementById("text-output").innerHTML = "Player Wins!";
		playerCredits += bet;
		document.getElementById("player-credits").innerHTML = "Player Credits: " + playerCredits;
	}
	else {
		document.getElementById("text-output").innerHTML = "Push!";
	}
	
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"setupRound();\">Next Round</button>";
}

//Split hand functions:

function splitHand() {
	if (bet * 2 > playerCredits) {
		document.getElementById("text-output").innerHTML = "Insufficient credits to split hand!";
		return;
	}
	bet *= 2;
	document.getElementById("player-bet").innerHTML = "Current Bet: " + bet + " (Total for both hands)";
	
	document.getElementById("player-cards").innerHTML = "<div class=\"current-hand\" id=\"player-split-hand1\"></div><div class=\"\" id=\"player-split-hand2\"></div>";
	
	playerSplitHand1.push(playerHand[0]);
	if (playerSplitHand1[0].name == "Ace") {
		playerSplitHand1Aces++;
	}
	var playerCard1 = drawCard();
	playerSplitHand1.push(playerCard1);
	playerSplitHand1Total = playerSplitHand1[0].value + playerSplitHand1[1].value;
	if (playerCard1.name == "Ace") {
		playerSplitHand1Aces++;
	}
	document.getElementById("player-split-hand1").innerHTML = "<img class=\"card\" src=\"" + playerSplitHand1[0].file + "\" alt=\"\" /><img class=\"card\" src=\"" + playerSplitHand1[1].file + "\" alt=\"\" />";
	
	playerSplitHand2.push(playerHand[1]);
	if (playerSplitHand2[0].name == "Ace") {
		playerSplitHand2Aces++;
	}
	var playerCard2 = drawCard();
	playerSplitHand2.push(playerCard2);
	playerSplitHand2Total = playerSplitHand2[0].value + playerSplitHand2[1].value;
	if (playerCard2.name == "Ace") {
		playerSplitHand2Aces++;
	}
	document.getElementById("player-split-hand2").innerHTML = "<img class=\"card\" src=\"" + playerSplitHand2[0].file + "\" alt=\"\" /><img class=\"card\" src=\"" + playerSplitHand2[1].file + "\" alt=\"\" />";
	
	document.getElementById("player-total").innerHTML = "Hand 1 Total: " + playerSplitHand1Total + " Hand 2 Total: " + playerSplitHand2Total;
	
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"hitSplitHand1();\">Hit Hand 1</button><button class=\"button\" onclick=\"staySplitHand1();\">Stay Hand 1</button>";
}

function hitSplitHand1() {
	var playerCard1 = drawCard();
	playerSplitHand1.push(playerCard1);
	if (playerCard1.name == "Ace") {
		playerSplitHand1Aces++;
	}
	document.getElementById("player-split-hand1").innerHTML += "<img class=\"card\" src=\"" + playerCard1.file + "\" alt=\"\" />";
	document.getElementById("text-output").innerHTML = "Player drew an " + playerCard1.name + " of " + playerCard1.suit + ".";
	
	playerSplitHand1Total += playerCard1.value;
	while ((playerSplitHand1Total > 21) && (playerSplitHand1Aces > 0)) {
		playerSplitHand1Total -= 10;
		playerSplitHand1Aces--;
	}
	document.getElementById("player-total").innerHTML = "Hand 1 Total: " + playerSplitHand1Total + " Hand 2 Total: " + playerSplitHand2Total;
	
	if (playerSplitHand1Total > 21) {
		playerSplitHand1Bust = true;
		document.getElementById("text-output").innerHTML += " Player busts hand 1!";
		document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"setupHand2();\">Continue for hand 2</button>";
	}
}

function staySplitHand1() {
	document.getElementById("text-output").innerHTML = "Player is staying on " + playerSplitHand1Total + " for hand 1.";
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"setupHand2();\">Continue</button>";
}

function setupHand2() {
	document.getElementById("player-split-hand1").className = "";
	document.getElementById("player-split-hand2").className = "current-hand";
	
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"hitSplitHand2();\">Hit Hand 2</button><button class=\"button\" onclick=\"staySplitHand2();\">Stay Hand 2</button>";
}

function hitSplitHand2() {
	var playerCard1 = drawCard();
	playerSplitHand2.push(playerCard1);
	if (playerCard1.name == "Ace") {
		playerSplitHand2Aces++;
	}
	document.getElementById("player-split-hand2").innerHTML += "<img class=\"card\" src=\"" + playerCard1.file + "\" alt=\"\" />";
	document.getElementById("text-output").innerHTML = "Player drew an " + playerCard1.name + " of " + playerCard1.suit + ".";
	
	playerSplitHand2Total += playerCard1.value;
	while ((playerSplitHand2Total > 21) && (playerSplitHand2Aces > 0)) {
		playerSplitHand2Total -= 10;
		playerSplitHand2Aces--;
	}
	document.getElementById("player-total").innerHTML = "Hand 1 Total: " + playerSplitHand1Total + " Hand 2 Total: " + playerSplitHand2Total;
	
	if (playerSplitHand2Total > 21) {
		playerSplitHand2Bust = true;
		document.getElementById("text-output").innerHTML += " Player busts hand 2!";
		document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"dealerTurn();\">Continue</button>";
	}
}

function staySplitHand2() {
	document.getElementById("text-output").innerHTML = "Player is staying on " + playerSplitHand2Total + " for hand 2.";
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"dealerTurn();\">Continue</button>";
}

function judgeWinSplitHands() {
	if (dealerBlackjack || (playerSplitHand1Total < dealerTotal && !dealerBust) || playerSplitHand1Bust) {
		document.getElementById("text-output").innerHTML = "Player Loses Hand 1!";
		playerCredits -= (bet / 2);
		document.getElementById("player-credits").innerHTML = "Player Credits: " + playerCredits;
	}
	else if (playerSplitHand1Total > dealerTotal || dealerBust) {
		document.getElementById("text-output").innerHTML = "Player Wins Hand 1!";
		playerCredits += (bet / 2);
		document.getElementById("player-credits").innerHTML = "Player Credits: " + playerCredits;
	}
	else if (playerSplitHand1Total == dealerTotal) {
		document.getElementById("text-output").innerHTML = "Push on Hand 1!";
	}
	
	if (dealerBlackjack || (playerSplitHand2Total < dealerTotal && !dealerBust) || playerSplitHand2Bust) {
		document.getElementById("text-output").innerHTML += " Player Loses Hand 2!";
		playerCredits -= (bet / 2);
		document.getElementById("player-credits").innerHTML = "Player Credits: " + playerCredits;
		
		if (playerCredits == 0) {
			document.getElementById("text-output").innerHTML += " Player is out of credits!";
			playerCredits = 20;
			document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"setupRound();\">Start New Game</button>";
			return;
		}
	}
	else if (playerSplitHand2Total > dealerTotal || dealerBust) {
		document.getElementById("text-output").innerHTML += " Player Wins Hand 2!";
		playerCredits += (bet / 2);
		document.getElementById("player-credits").innerHTML = "Player Credits: " + playerCredits;
	}
	else if (playerSplitHand2Total == dealerTotal) {
		document.getElementById("text-output").innerHTML += " Push on hand 2!";
	}
	
	document.getElementById("buttons").innerHTML = "<button class=\"button\" onclick=\"setupRound();\">Next Round</button>";
}
