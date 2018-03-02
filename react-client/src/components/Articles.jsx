import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';

class Articles extends React.Component {
	constructor(props){
		super(props)
		this.getArticles = this.getArticles.bind(this);
	}
	componentDidMount(){
		this.getArticles();
	}

	getArticles(){
		this.props.dispatch({type: 'ARTICLES'})
	}
	
	render(){
		return (
			<div>
			<h3>Articles</h3>
			{console.log("Inside articles", this.props.articles)}
			
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

// {props.articles.map((article, i) => {
// 				return <div key={i}>
// 					<h4>{article.title}</h4>
// 					<div>{article.author}</div>
// 					<div>{article.description}</div>
// 					<div>{article.url}</div>
// 				</div>
// 			})}