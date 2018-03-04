import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { getArticles } from '../actions/getArticles.js';

class Articles extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.dispatch(getArticles());
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

