import React, { Component } from 'react';
import List from './List';
import Form from "./Form";
import UpdateItem from './UpdateItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      priority: '',
      items: [],
      id: 0,
      editIdx: -1
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.startEditing = this.startEditing.bind(this);
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

  startEditing(id) {
    this.setState({
      editIdx: id
    });
  }

  stopEditing() {
    this.setState({
      editIdx: -1
    })
  }

  handleUpdateChange(e, name, i) {
    const { value } = e.target;
    this.setState(state => ({
      items: state.items.map((items, j) => j === i ? { items, [name]: value } : items)
    }));
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
              handleUpdateChange={this.handleUpdateChange}
              editIdx={this.editIdx}
              editing={this.startEditing}
              delete={this.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
