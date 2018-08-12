import React from 'react';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: [
				{ id: 1, name: 'homework', done: false },
				{ id: 2, name: 'play', done: true },
				{ id: 3, name: 'cook', done: false }
			]
		};
	}
	onAdd(name) {
		console.log(name);
		let newTodo = { id: 4, name: name, done: false };
		this.setState({ todos: [ ...this.state.todos, newTodo ] });
	}
	onRemove(id) {}
	onUpdate(id, name) {}
	onToggleDone(id) {}
	render() {
		return (
			<div>
				{this.state.todos.map((todo) => (
					<button key={todo.id}>
						{todo.name} <span>{todo.done ? 'DONE' : ''}</span>
					</button>
				))}

				<hr />

				<button
					onClick={() => {
						this.onAdd('work');
					}}
				>
					add "work"
				</button>
			</div>
		);
	}
}

export default App;
