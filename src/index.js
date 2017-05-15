import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import About from './components/about';
import Home from './pages/home';

ReactDOM.render((
  <Router history={hashHistory} >
		<Route path="/" component={Home}/>
		<Route path="/about" component={About}/>
	</Router>
), document.getElementById('root'));
