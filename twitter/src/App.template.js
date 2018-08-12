import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
      num1: 0,
      num2: 0
		};
	}
	incrementTimer(num) {
		this.setState({
			num: this.state.num + num,
			text: Math.random()
		});
	}
	handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
	render() {
		return (
			<div className="App">
        <input type="number" name="num1" value={this.state.num1} onChange={this.handleChange.bind(this)} />
        <input type="number" name="num2" value={this.state.num2} onChange={this.handleChange.bind(this)} />
        { parseInt(this.state.num2) + parseInt(this.state.num1) }
			</div>
		);
	}
}

export default App;
