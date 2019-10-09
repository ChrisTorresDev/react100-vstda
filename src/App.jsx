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
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
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

  // priorityClass(priority) {
  //   switch (priority) {
  //     case '1':
  //       return 'list-group-item-warning';
  //     case '2':
  //       return 'list-group-item-success';
  //     case '3':
  //       return 'list-group-item-danger';
  //   }
  // }


  
  handleUpdateSubmit(e) {
    e.preventDefault();
    
    this.setState({
      editEnabled: false, todo: todo, priority: priority
    });
  };
  
  handleUpdateChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value 
    });
  };
  
  handleEdit() {
    this.setState({
      editEnabled: true
    });
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
            <div className="card">
              <div className="card-header">
                View Todos
              </div>
              <div className="card-body">
                {editEnabled ? <UpdateItem
                  handleUpdateSubmit={this.handleUpdateSubmit}
                  handleUpdateChange={this.handleUpdateChange}
                  updateTodo={this.state.todo}
                  updatePriority={this.state.priority} />
                  :
                  <List items={this.state.items}
                    priorityClass={this.priorityClass}
                    edit={this.handleEdit}
                    delete={this.deleteItem} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
