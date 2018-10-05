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
      title: this.refs.todoItem.value,
      checked: false
    }
    
    this.state.todoList.push(newTodo);

    this.setState({
      todoList: this.state.todoList,
      total: this.state.total + 1,
      unchecked: this.state.unchecked + 1,
    });

    event.target.reset();
  }

  checkItem(id) {
    for(var i=0; i<this.state.todoList.length; i++) {
      if(this.state.todoList[i].id === id) {
        this.state.todoList[i].checked = !this.state.todoList[i].checked;
        
        if(this.state.todoList[i].checked) {
          this.setState({
            todoList: this.state.todoList,
            unchecked: this.state.unchecked - 1,
          })
        } else {
          this.setState({
            todoList: this.state.todoList,
            unchecked: this.state.unchecked + 1,
          })
        }

        break;
      }
    }    
  }

  removeTodo(id) {
    for(var i=0; i<this.state.todoList.length; i++) {
      if(this.state.todoList[i].id === id) {
        if(this.state.todoList[i].checked) {
          this.setState({
            todoList: this.state.todoList,
            total: this.state.total - 1
          })
        } else {
          this.setState({
            todoList: this.state.todoList,
            total: this.state.total - 1,
            unchecked: this.state.unchecked - 1
          })
        }              
        
        this.state.todoList.splice(i, 1);     

        break;
      }
    }
  }

  renderTodoItems() {
    var items;
    
    if(this.state.todoList.length > 0) {
      items = this.state.todoList.map(todo => {
        return <li className={classNames.TODO_ITEM} key={todo.id}>
          <input type="checkbox" ref="checkItem" className={classNames.TODO_CHECKBOX} onChange={() => this.checkItem(todo.id)} />
          <span className={classNames.TODO_TEXT}>{todo.title}</span>
          <button className={classNames.TODO_DELETE} onClick={() => this.removeTodo(todo.id)}>DELETE</button>
        </li>
      });
    } else {
      items = <p className="align-center">No todo items found.</p>
    }

    return items;
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
          this.renderTodoItems()
        }
      </ul>
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById("root"));