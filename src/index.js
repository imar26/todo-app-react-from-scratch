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
      todoList: [],
      todoItem: '',
      total: 0,
      unchecked: 0
    }
  } 

  newTodo(event) {
    event.preventDefault();

    var newTodo = {
      id: Math.random(),
      title: this.refs.todoItem.value
    }
    
    this.state.todoList.push(newTodo);

    this.setState({
      todoList: this.state.todoList,
      total: this.state.total + 1,
      unchecked: this.state.unchecked + 1,
    });

    event.target.reset();
  }

  render() {
    return <div className="container center">
      <h1 className="center title">My TODO App</h1>
      <div className="flow-right controls">
        <span>Item count: <span id="item-count">{this.state.total}</span></span>
        <span>Unchecked count: <span id="unchecked-count">{this.state.unchecked}</span></span>
      </div>
      <form className="form-elements" onSubmit={this.newTodo.bind(this)}>
        <input type="text" ref="todoItem" placeholder="Enter Todo Item" required />
        <input type="submit" value="New TODO" className="button center" />
      </form>
      <ul id="todo-list" className="todo-list">
        {
          this.state.todoList.map(todo => {
            return <li className={classNames.TODO_ITEM} key={todo.id}>
              <p className={classNames.TODO_TEXT}>{todo.title}</p>
            </li>
          })
        }
      </ul>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// const itemCountSpan = document.getElementById('item-count')
// const uncheckedCountSpan = document.getElementById('unchecked-count')
