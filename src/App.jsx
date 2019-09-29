import React, { Component } from 'react';
import Table from './Table';
import Form from "./Form";

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

    let items = [this.state.items];

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
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

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
            <Form handleFormSubmit={ this.handleFormSubmit } 
              handleInputChange={ this.handleInputChange }
              newTodo={ this.state.todo }
              newPriority={ this.state.priority } />
          </div>
          <div className="form-group col-8">
            <Table items={ this.state.items }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
