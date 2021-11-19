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

class Toggle extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {isToggleOn: true};

	  // This binding is necessary to make `this` work in the callback
	  this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
	  this.setState(prevState => ({
		isToggleOn: !prevState.isToggleOn
	  }));
	}

	render() {
	  return (
		<button onClick={this.handleClick}>
		  {this.state.isToggleOn ? 'ON' : 'OFF'}
		</button>
	  );
	}
  }

  ReactDOM.render(
	<Toggle />,
	document.getElementById('root')
  );

  function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
  }

  function GuestGreeting(props) {
	return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
	  return <UserGreeting />;
	}
	return <GuestGreeting />;
  }

  ReactDOM.render(
	// Try changing to isLoggedIn={true}:
	<Greeting isLoggedIn={true} />,
	document.getElementById('root')
  );

  function LoginButton(props) {
	return (
	  <button onClick={props.onClick}>
		Login
	  </button>
	);
  }

  function LogoutButton(props) {
	return (
	  <button onClick={props.onClick}>
		Logout
	  </button>
	);
  }

  class LoginControl extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleLoginClick = this.handleLoginClick.bind(this);
	  this.handleLogoutClick = this.handleLogoutClick.bind(this);
	  this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
	  this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
	  this.setState({isLoggedIn: false});
	}

	render() {
	  const isLoggedIn = this.state.isLoggedIn;
	  let button;
	  if (isLoggedIn) {
		button = <LogoutButton onClick={this.handleLogoutClick} />;
	  } else {
		button = <LoginButton onClick={this.handleLoginClick} />;
	  }

	  return (
		<div>
		  <Greeting isLoggedIn={isLoggedIn} />
		  {button}
		</div>
	  );
	}
  }

  ReactDOM.render(
	<LoginControl />,
	document.getElementById('root')
  );


const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
	  return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil.</p>;
	}
	return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return (
		<fieldset>
			<legend>Enter temperature in {scaleNames[scale]}:</legend>
			<input value={temperature}
				 onChange={this.handleChange} />
		</fieldset>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {temperature: '', scale: 'c'};
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature});
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

		return (
		<div>
			<TemperatureInput
			scale="c"
			temperature={celsius}
			onTemperatureChange={this.handleCelsiusChange} />
			<TemperatureInput
			scale="f"
			temperature={fahrenheit}
			onTemperatureChange={this.handleFahrenheitChange} />
			<BoilingVerdict
			celsius={parseFloat(celsius)} />
		</div>
		);
	}
}

ReactDOM.render(
	<Calculator />,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);