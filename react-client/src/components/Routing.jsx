import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewArticle from './NewArticle.jsx';
import Articles from './Articles.jsx';

const Routing = (props) => (
  <Router>
    <div>
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
);

export default Routing;