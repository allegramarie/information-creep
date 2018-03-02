import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';

class Articles extends React.Component {
	constructor(props){
		super(props)
		this.getArticles = this.getArticles.bind(this);
	}
	componentDidMount(){
		console.log("Mounted!")
		this.getArticles();
	}

	getArticles(){
		console.log("inside get articles")
		// this.props.dispatch({type: 'ARTICLES'})
		return function(dispatch){
			console.log("Makes it inside dispatch")
			axios.get('/articles')
			.then((response) => {
				console.log("Getting articles from axios", response.data),
				dispatch({
					type: 'ARTICLES',
					payload: response.data,
				})
			})
			.catch((error) => {
				console.log(error)
			})
		}
	}
	
	render(){
		return (
			<div>
			<h3>Articles</h3>
			{console.log("Inside articles", this.props.articles)}
			{this.props.articles.map((article, i) => {
				return <div key={i}>
					<h4>{article.title}</h4>
					<div>{article.author}</div>
					<div>{article.description}</div>
					<div>{article.url}</div>
				</div>
			})}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(Articles);

