var express = require('express');
var parse = require('body-parser');
var path = require('path');
var db = require('../database')
var session = require('express-session');
var {createSession} = require('../react-client/src/actions/createSession');
const app = express();

app.use(express.static(path.join(__dirname, '../react-client/dist')));
app.use(parse.json())
app.use(session({
  secret: 'lazy promises',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 300000
  }
}))

app.get('/articles', (req, res) => {
	console.log('getting articles', req)
	if(req.session.token){
		console.log('token exists')
		return req.sessions.regenerate(function(){
			db.getAllArticles((data) => {
				res.send(data.rows);
			})
		})
	} else {
		console.log('no token!')
		db.getAllArticles((data) => {
			res.send(data.rows);
		})
	}
})

app.get('/authenticate', (req, res) => {
	console.log('Authenticating...');
	createSession(req, res);
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

let port = process.env.PORT || 4000;

app.listen(port, function(){
	console.log(`listening on ${port}!`)
})