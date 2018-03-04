var format = require('pg-format');
const { Pool } = require('pg')

const pool = new Pool({
	host: process.env.DATABASE_URL,
  user: '',
  password: '',
  database: 'articlesDB'
})

const getAllArticles = function(callback) {
	pool.query('SELECT * from articles', (err, results) => {
	  if (err) {
	    return console.error('Error executing query', err.stack)
	  } else {
	  	callback(results)
	  }
	})
}

const addArticle = function(input, callback) {
	var values = [input.title, input.author, input.url, input.description, input.private]
	console.log("Within new article query", values)
	pool.query(`insert into articles (title, author, url, description, private) values ('${input.title}', '${input.author}', '${input.url}', '${input.description}', '${input.private}');`, (err, results) => {
		if(err){
			console.log(err)
		} else {
			callback(results)
		}
	})
}

const searchArticles = function(input, callback) {
	pool.query(`SELECT * from articles WHERE description like '%${input}%' OR title like '%${input}%';`, (err, results) => {
		if(err){
			console.log(err)
		} else {
			callback(results)
		}
	})
}

pool.connect((err) => {
		  if (err) {
		    console.error('connection error', err.stack)
		  } else {
		    console.log('connected to the db')
		  }
		})

module.exports = {
	getAllArticles,
	addArticle,
	searchArticles
}