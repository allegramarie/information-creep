import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Articles from './components/Articles.jsx';
import Search from './components/Search.jsx';
import NewArticle from './components/NewArticle.jsx';

const initialState = {
  articles: [],
  pocketToken: ''
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ARTICLES':
      return {
        articles: action.payload
      };
      case 'SEARCH': 
      return {
      	articles: action.payload
      }
      case 'POCKET':
      return {
        pocketToken: action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
  <Router>
    <div>
    <h2>The CallStack</h2>
      <ul className="nav">
        <li>
          <Link className="btn btn-primary" role="button" to="/">Articles</Link>
        </li>
        <li>
          <Link className="btn btn-primary" role="button" to="/addnew">Add New Article</Link>
        </li>
      </ul>
      <Search />	
      <Route exact path="/" component={Articles}/>

      <Route exact path="/articles" component={Articles}/>

      <Route path="/addnew" component={NewArticle} />

    </div>
  </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));