import React from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [
				{ id: 1, name: 'john', text: 'today i ate' },
				{ id: 2, name: 'donald', text: 'knowledge is power' },
				{ id: 3, name: 'kim', text: 'mcdonalds' }
			],
			username: 'dnkm',
			text: ''
		};
  }
  post() {
    let newPost = {
      id: this.state.posts.length,
      name: this.state.username,
      text: this.state.text
    };
    this.setState({
      posts: [newPost, ...this.state.posts],
      text: ''
    })
  }
  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }
	render() {
		return (
			<div className="App">
				<Header />
				<PostList posts={this.state.posts} />

				<div className="input-form">
					<input type="text" value={this.state.text} onChange={this.handleChange.bind(this)} />
					<button onClick={this.post.bind(this)}>POST</button>
				</div>
			</div>
		);
	}
}

export default App;
