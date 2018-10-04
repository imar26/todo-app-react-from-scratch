import React from "react";
import ReactDOM from "react-dom";

// Import Styles
import './style.css';

const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));

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
