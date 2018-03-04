import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import { connect } from 'react-redux';

class NewArticle extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			author: '',
			description: '',
			url: '',
			private: false
		}
	this.addNew = this.addNew.bind(this);
	}

	addNew(event){
		event.preventDefault();
		console.log(this.state.title, this.state.url, this.state.author, this.state.description)
		axios.post('/newarticle', {
			title: this.state.title, 
			url: this.state.url, 
			author: this.state.author, 
			description: this.state.description,
			private: this.state.private
		}).then((response) => {
			this.setState({
				title: '',
				author: '',
				description: '',
				url: '',
				private: false
			})
			console.log("Article saved!")
		})
		.catch((error) => {
			console.log(error);
			this.setState({
				title: '',
				author: '',
				description: '',
				url: '', 
				private: false
			})
		})
	}

	render(){
		return (
			<div>
			<h3>Add a New Article:</h3>
			<form className="col-4">
				<div >
					<input className="form" type="text" placeholder="Title" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}></input>
				</div>
				<div>
					<input className="form" type="text" placeholder="Author" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}></input>
				</div>
				<div>
					<textarea className="form" type="text" placeholder="Description" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}></textarea>
				</div>
				<div>
					<input className="form" type="text" placeholder="Url" value={this.state.url} onChange={(event) => this.setState({url: event.target.value})}></input>
				</div>
				<div>
					<label>This article is private
	 				<input className="form" type="checkbox" value="private" value={this.state.private} onChange={(event) => this.setState({private: true})}/>
	 	    		</label>
				</div>
				<button type="submit" className="btn btn-primary" onClick={this.addNew}>Submit</button>
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

export default connect(mapStateToProps)(NewArticle);
