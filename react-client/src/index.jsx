import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Articles from './components/Articles.jsx';
// import Search from './components/Search.jsx';
// import UserProfile from './components/UserProfile.jsx';
// import UserArticles from './components/UserArticles.jsx';
import NewArticle from './components/NewArticle.jsx';

const initialState = {
  articles: []
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ARTICLES':
    console.log("Within reducer", state.articles)
      return {
        articles: action.payload
      };
    default:
      return state;
  }
}
// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			articles: []
// 		}
// 		this.getArticles = this.getArticles.bind(this);
// 	}

// 	componentDidMount(){
// 		this.getArticles();
// 	}

// 	getArticles(){
// 		axios.get('/articles')
// 		.then((response) => {
// 			console.log("Getting articles", response.data.rows)
// 			this.setState({
// 				articles: response.data.rows,
// 			})
// 		})
// 		.catch((error) => {
// 			console.log(error)
// 		})
// 	}

// 	search(term){
// 		console.log(`${term} was searched!`)
// 		axios.post('/articles', {
// 			articles: term,
// 		})
// 		.then((response) => {
// 			console.log("Response", response)
// 			this.setState({
// 				articles: response
// 			})
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		})
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h2>Info Creep</h2>
// 				<Search onSearch={this.search.bind(this)}/>
// 				<Routing />
// 			</div>
// 		)
// 	}
// }

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
  <Router>
    <div>
    <h2>Info Creep</h2>
    
      <ul>
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>
          <Link to="/addnew">Add New Article</Link>
        </li>
      </ul>
      <Route exact path="/" component={Articles}/>

      <Route path="/addnew" component={NewArticle} />

    </div>
  </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

// <Search onSearch={this.search.bind(this)}/>