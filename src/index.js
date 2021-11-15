import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
	if (user) {
	  return <h1>Hello, {formatName(user)}!</h1>;
	}
	return <h1>Hello, Stranger.</h1>;
}

const user = {
	firstName: 'Takuya',
	lastName: 'Kogawa'
};

// const element = getGreeting(user);
const element = (
	<div>
	  <h1>Hello!</h1>
	  <h2>Good to see you here.</h2>
	</div>
);

ReactDOM.render(
	element,
	document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();