import React, { Component } from 'react';
import Form from "./Form";
import Table from './Table';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todo: '',
      priority: '',
      items: []
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleFormChange(e) {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      todo: this.state.todo,
      priority: this.state.priority
    });

    this.setState({
      items,
      todo: '',
      priority: ''
    });
  };

  handleInputChange(e) {
    let textarea = e.target;
    let name = e.target.name;
    let value = textarea.value;

    this.setState({
      [name]: value
    })
  };

  render() {
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
              <Form handleFormSubmit={ this.handleFormSubmit } 
                handleInputChange={ this.handleInputChange }
                newTodo={ this.state.todo }
                newPriority={ this.state.priority } />
              {/* <div className="card-body">
                <h5 className="card-title">I want to..</h5>
                <textarea className="create-todo-text" name='todo' onChange={this.handleChange} />
                <h5 className="card-title">How much of a priority is this</h5>
                <select name="" id="" className="create-todo-priority" name='priority' onChange={this.handleChange}>
                  <option value="">Select a Priority</option>
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
                </select>
              </div> */}
              {/* <div className="card-footer">
              <a href="#" id="add-item" className="btn btn-primary">Add</a>
              </div> */}
            </div>
          </div>
          <div className="form-group col-8">
            <div className="card">
              <div className="card-header">
                View Todos
              </div>
              <Table items={ this.state.items }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
