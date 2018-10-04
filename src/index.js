import React, { Component } from "react";
import ReactDOM from "react-dom";

// Import Styles
import './style.css';

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: []
    }
  } 

  newTodo() {
    var newTodo = {
      id: Math.random(),
      title: 'This is my new todo item'
    }
    
    this.state.todoList.push(newTodo);

    this.setState({
      todoList: this.state.todoList
    });
  }

  render() {
    return <div className="container center">
      <h1 className="center title">My TODO App</h1>
      <div className="flow-right controls">
        <span>Item count: <span id="item-count">0</span></span>
        <span>Unchecked count: <span id="unchecked-count">0</span></span>
      </div>
      <input type="text" ref="todoItem" placeholder="Enter Todo Item" required />
      <button className="button center" onClick={() => this.newTodo()}>New TODO</button>
      <ul id="todo-list" className="todo-list">
        {
          this.state.todoList.map(todo => {
            return <li className={classNames.TODO_ITEM} key={todo.id}><p className={classNames.TODO_TEXT}>{todo.title}</p></li>
          })
        }
      </ul>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// const itemCountSpan = document.getElementById('item-count')
// const uncheckedCountSpan = document.getElementById('unchecked-count')
