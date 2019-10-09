import React, { Component } from 'react';
import List from './List';
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      priority: '',
      items: [],
      id: 0,
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  };

  handleFormSubmit(e) {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      todo: this.state.todo,
      priority: this.state.priority,
      id: this.state.id,
    });

    this.setState({
      items,
      todo: '',
      priority: '',
      id: Date.now(),
    });
  };

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };


  deleteItem(id) {
    var filteredItems = this.state.items.filter(function (items) {
      return (items.id !== id)
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    const editEnabled = this.state.editEnabled;

    return (
      <div className='container'>
        <div className="row">
          <div className="header">
            <h1 className="display-4">A Very Simple Todo App</h1>
            <p className="lead">Track all of the things</p>
            <hr className="my-4" />
          </div>
          <div className="form-group col-4">
            <Form handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              newTodo={this.state.todo}
              newPriority={this.state.priority} />
          </div>
          <div className="form-group col-8">
            <List items={this.state.items}
              delete={this.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
