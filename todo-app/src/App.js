import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Menu(props) {
  let style = {
    background: props.color
  }

  let menuItems = props.menuItems.map(val => <div>{val}</div>);

  return (
    <div className="menu" style={style}>
      {menuItems}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu color="skyblue" menuItems={[1,2,3]} />
        <h1>my website </h1>
        <p>you are visitor #{Math.floor(Math.random() * 10)+1} </p>
        <Menu color="pink" menuItems={['a','b','c']} />
      </div>
    );
  }
}

export default App;
