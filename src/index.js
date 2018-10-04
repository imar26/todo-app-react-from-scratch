import React, { Component } from "react";
import ReactDOM from "react-dom";

// Import Styles
import './style.css';

class App extends Component {
  newTodo() {
    alert('New TODO button clicked!');
  }

  render() {
    return <div className="container center">
      <h1 className="center title">My TODO App</h1>
      <div className="flow-right controls">
        <span>Item count: <span id="item-count">0</span></span>
        <span>Unchecked count: <span id="unchecked-count">0</span></span>
      </div>
      <button className="button center" onClick={() => this.newTodo()}>New TODO</button>
      <ul id="todo-list" className="todo-list"></ul>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// const classNames = {
//   TODO_ITEM: 'todo-container',
//   TODO_CHECKBOX: 'todo-checkbox',
//   TODO_TEXT: 'todo-text',
//   TODO_DELETE: 'todo-delete',
// }

// const list = document.getElementById('todo-list')
// const itemCountSpan = document.getElementById('item-count')
// const uncheckedCountSpan = document.getElementById('unchecked-count')

// function newTodo() {
//   alert('New TODO button clicked!')
// }
