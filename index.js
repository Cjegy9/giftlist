import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

const config = {
		apiKey: "AIzaSyAnjjdVXh7GKzUEwNXbpBFU8kXEoT8BJUY",
		authDomain: "monymanagement-281ac.firebaseapp.com",
		databaseURL: "https://monymanagement-281ac.firebaseio.com",
		storageBucket: "monymanagement-281ac.appspot.com"
};
firebase.initializeApp(config);

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
