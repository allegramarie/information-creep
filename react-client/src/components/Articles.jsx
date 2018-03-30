import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { getArticles } from '../actions/getArticles.js';
import { pocket } from '../actions/pocket.js';

class Articles extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.dispatch(getArticles());
		console.log('checking on pocket', this.props.pocketToken)
	}
	
	render(){
		return (
			<div className="col-4">
			<h3>Articles</h3>
			{console.log("Inside articles", this.props.articles)}
			{this.props.articles.map((article, i) => {
				return <div className="article" key={i}>
					<h4>{article.title}</h4>
					<div>{article.author}</div>
					<div className="description">{article.description}</div>
					<div><a href={article.url}>{article.url}</a></div>
					
				</div>
			})}
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
    pocketToken: state.pocketToken
  };
}

export default connect(mapStateToProps)(Articles);

