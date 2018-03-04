import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { onSearch } from '../actions/search.js';

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
		this.onChange = this.onChange.bind(this);
		this.search = this.search.bind(this);
	}

	onChange(e){
		e.preventDefault();
		this.setState({
			term: e.target.value
		})
	}

	search(e){
		e.preventDefault();
		this.props.dispatch(onSearch(this.state.term))
		this.setState({
			term: ''
		})
	}

	render(){
		return(
			<div className="col-4">
				<form>
					<input className="search" type="text" placeholder="Search" value={this.state.term} onChange={(e) => {this.onChange(e)}}></input>
					<button type="button" className="btn btn-primary" onClick={this.search}>Search</button>
				</form>
			</div>
	)
	}
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(Search);