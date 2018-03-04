var express = require('express');
var parse = require('body-parser');
var path = require('path');
var db = require('../database')
const app = express();

app.use(express.static(path.join(__dirname, '../react-client/dist')));
app.use(parse.json())


app.get('/articles', (req, res) => {
	db.getAllArticles((data) => {
		res.send(data.rows);
	})
})

app.post('/newarticle', (req, res) => {
	db.addArticle(req.body, (data) => {
		console.log(data);
		res.send(data);
	})
})

app.post('/search', (req, res) => {
	db.searchArticles(req.body.term, (data) => {
		res.send(data.rows);
	})
})

let port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log(`listening on ${port}!`)
})