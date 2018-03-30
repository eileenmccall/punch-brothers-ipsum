const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const lorem = require('./lorem.js');
const port = process.env.PORT || 3000;

let app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

// Need these to allow handlers to parse req.body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Request Handlers
app.get('/', (req, res) => {
	res.render('home.hbs', {
		title: 'Punch Brothers Ipsum',
		lorem: lorem.getLorem(3)
	})
});

app.post('/', (req, res) => {
	let paragraphs = req.body.paragraphs;

	res.render('result.hbs', {
		title: 'Punch Brothers Ipsum',
		lorem: lorem.getLorem(paragraphs)
	})
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});