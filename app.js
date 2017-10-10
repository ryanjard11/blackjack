(function () {

	var dealBtn = document.getElementById('deal');
	var hitBtn = document.getElementById('hit');
	var standBtn = document.getElementById('again');
	var playerCardsdiv = document.getElementById('playerCardsDiv');
	var dealerCardsdiv = document.getElementById('dealerCardsDiv');


	let deck = [];
	let dealer = [];
	let player = [];
	let dealerPoints = 0;
	let playerPoints = 0;

	dealBtn.addEventListener('click', function () {
		deal();
	})

	hitBtn.addEventListener('click', function () {
		hit();
	})

	standBtn.addEventListener('click', function () {
		stand();
	})

	function deal() {

		deck = shuffle();

		player.push(deck.shift());
		dealer.push(deck.shift());
		player.push(deck.shift());
		dealer.push(deck.shift());

		showCardsOnTable(playerCardsdiv, player[0], true);
		showCardsOnTable(playerCardsdiv, dealer[1], true);
		showCardsOnTable(playerCardsdiv, player[0], true);
		showCardsOnTable(playerCardsdiv, dealer[1], false);

		playerPoints = getHandValue(player);
		dealerPoints = getHandValue(dealer);

		console.log('player: ', playerPoints);
		console.log('dealer: ', dealerPoints);

		if (dealerPoints === 21 || playerPoints === 21) {
			showWinner();
		}
		dealBtn.classList.add('hidden');
		hitBtn.classList.remove('hidden');
		standBtn.classList.remove('hidden');

	}

	function showWinner() {
		winnerDiv.classList.remove('hidden');

		if (dealerPoints === playerPoints) {
			winnerDiv.innerText = 'Its a Push';
			winnerDiv.classList.add('alert-warning');
		}

		if (dealerPoints > playerPoints) {
			if (dealerPoints > 21) {
				winnerDiv.innerText = 'Player wins';
				winnerDiv.classList.add('alert-warning');
			}
			else {
				winnerDiv.innerText = 'Dealer wins';
				winnerDiv.classList.add('alert-danger');
			}

		}
	}

	function getHandValue(hand) {

	}

	function showCardsOnTable(div, card, isFaceUp) {
		var cardImage = document.createElement('img');
		if (isFaceUp) {
			cardImage.src
		}
		cardImage.src = 'img/' + card + '.png';
		cardImage.classList.add('card');
		div.appendChild()
	}

	function shuffle() {

		// Fisher–Yates Shuffle        
		// Source: https://bost.ocks.org/mike/shuffle/

		let array = [
		‘2H’, ‘3H’, ‘4H’, ‘5H’, ‘6H’, ‘7H’, ‘8H’, ‘9H’, ‘10H’, ‘JH’, ‘QH’, ‘KH’, ‘AH’,
		‘2S’, ‘3S’, ‘4S’, ‘5S’, ‘6S’, ‘7S’, ‘8S’, ‘9S’, ‘10S’, ‘JS’, ‘QS’, ‘KS’, ‘AS’,
		‘2C’, ‘3C’, ‘4C’, ‘5C’, ‘6C’, ‘7C’, ‘8C’, ‘9C’, ‘10C’, ‘JC’, ‘QC’, ‘KC’, ‘AC’,
		‘2D’, ‘3D’, ‘4D’, ‘5D’, ‘6D’, ‘7D’, ‘8D’, ‘9D’, ‘10D’, ‘JD’, ‘QD’, ‘KD’, ‘AD’
				];

		var m = array.length, t, i;

		// While there remain elements to shuffle…
		while (m) {

			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);

			// And swap it with the current element.
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}

})();
