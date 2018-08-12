import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			version: 1,
			todos: [ 'homework', 'play', 'cook' ],
			newTodo: ''
		};
	}
	addVersion() {
		this.setState({
			version: this.state.version + 1
		});
	}
	addTodo() {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ''
    })
  }
	deleteTodo(index) {
		let newTodos = this.state.todos.filter((val, i) => {
			return i !== index;
		});
		this.setState({
			todos: newTodos
		});
	}
	render() {
		let todoBtns = this.state.todos.map((val, i) => {
			return <button onClick={() => this.deleteTodo(i)}>{val}</button>;
		});

		return (
			<div className="App">
				<h1>
					todo list v.{this.state.version}
					<button onClick={() => this.addVersion()}>+</button>
				</h1>
				hello
				<input
					type="text"
					value={this.state.newTodo}
					onChange={(event) => {
						this.setState({ newTodo: event.target.value });
					}}
				/>
				<button className="add-btn" onClick={() => this.addTodo()}>
					ADD
				</button>
				{todoBtns}
			</div>
		);
	}
}

export default App;
