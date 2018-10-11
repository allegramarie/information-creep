var express = require('express');
var parse = require('body-parser');
var path = require('path');
var db = require('../database')
var session = require('express-session');
var {createSession} = require('../react-client/src/actions/createSession');
const app = express();
const axios = require('axios');
const formData = require('form-data')
const config = require("../config.js");

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
	// console.log('getting articles', req)
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

app.post('/pocket', (req, res) => {
	console.log('inside post request to pocket')
	var url = 'https://getpocket.com/v3/oauth/request';
	axios.post(url, {
    "headers": {
			'consumer-key': `${config.TOKEN}`,
			'redirect-uri': 'http://localhost:3000',
			'content-type': 'application/json',
			'accept': 'application/json'
		}
      })
  .then((response) => {
  	console.log('response from pocket', response)
  	res.send()
  })
  .catch((err) => {
    console.log(err)
  })
		// var code = response.data.substr(5);
		// console.log("Response", response, response.data.substr(5))
		// dispatch(confirmUser(code))
})

let port = process.env.PORT || 4000;

app.listen(port, function(){
	console.log(`listening on ${port}!`)
})