import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class App extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     todos: todosData
  //   }
  // }

  render() {
    // const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)

    return (
      <div className='container'>
        <div className="row">
          <div className="header">
            <h1 className="display-4">A Very Simple Todo App</h1>
            <p className="lead">Track all of the things</p>
            <hr className="my-4"/>
          </div>
          <div className="form-group col-4">
            <div className="card">
              <div className="card-header">
                Add New Todo
              </div>
              <div className="card-body">
                <h5 className="card-title">I want to..</h5>
                <textarea name="" id="" cols="30" rows="10" className="create-todo-text"></textarea>
                <h5 className="card-title">How much of a priority is this</h5>
                <select name="" id="" className="create-todo-priority">
                  <option value="">Select a Priority</option>
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
                </select>
              </div>
              <div className="card-footer">
              <a href="#" id="add-item" className="btn btn-primary">Add</a>
              </div>
            </div>
          </div>
          <div className="form-group col-8">
            <div className="card">
              <div className="card-header">
                View Todos
              </div>
              <TodoItem />
              <TodoItem />
              <TodoItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
