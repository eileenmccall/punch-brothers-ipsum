const lyrics = require('./lyrics.js');

function getRandomLine () {
	return lyrics[Math.floor(Math.random() * lyrics.length)];
}

function getRandomSentence () {
	let sentence;
	let lines = [];

	for (var i = 0; i < 3; i++) {
		lines.push(getRandomLine().toLowerCase());
	}

	sentence = lines.join(' ');
	
	let formattedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) + '. ';
	return formattedSentence;
}

function getRandomParagraph () {
	let
		randomNumber = Math.floor(Math.random() * (6 - 3 + 1) + 3),
		paragraph = ''
	;

	for (var i = 0; i < randomNumber; i++) {
		paragraph += (getRandomSentence());
	}

  	return paragraph;
}

function getLorem (num) {
	if (num > 100) {
		num = 100;
	}
	
	let lorem = [];

	while (lorem.length < num) {
		lorem.push(getRandomParagraph());
	}
	
	return lorem;
};

module.exports.getLorem = getLorem;