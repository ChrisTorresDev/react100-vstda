import React, { Component } from 'react';
import Table from './Table';
import Form from "./Form";
import UpdateItem from './UpdateItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      priority: '',
      items: [],
      id: 0
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
      id: this.state.id
    });

    this.setState({
      items,
      todo: '',
      priority: '',
      id: Date.now()
    });
  };

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };  

  updateItem(e) {
    var changedItems = this.state.updateItems.filter(function (items) {
      return (<UpdateItem />)
    });
    this.setState({
      items: changedItems
    })
  }

  deleteItem(id) {
    var filteredItems = this.state.items.filter(function (items) {
      return (items.id !== id)
    });

    this.setState({
      items: filteredItems
    });
  }

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
            <Table items={ this.state.items }
              update={this.updateItem}
              delete={this.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
