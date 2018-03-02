import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

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
		this.props.onSearch(this.state.term)
	}

	render(){
		return(
			<div>
				<form>
					<input type="text" placeholder="Search" value={this.state.term} onChange={(e) => {this.onChange(e)}}></input>
					<button type="button" onClick={this.search}>Search</button>
				</form>
			</div>
	)
	}
}

export default Search;