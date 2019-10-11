import React, { Component } from 'react';
import List from './List';
import Form from "./Form";
import UpdateItem from './UpdateItem';


let items = [];
var id =0;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  };

  handleFormSubmit(todo, priority) {

    let tempItems = this.state.items;

    let newTodo = {
      id: id,
      todo: todo,
      priority: priority,
      editEnabled: false
    }

    tempItems.push(newTodo);

    this.setState({
      items: tempItems
    });

    id++;
  };

  handleEdit(id) {

    let editItems = this.state.items;
    
    for (let i = 0; i < editItems.length; i++){
      if (editItems[i].id == id) {
        editItems[i].editEnabled = true;
      }
    }

    this.setState({items: editItems});
  }

  handleSave(id) {

    let saveItems = this.state.items;
    
    for (let i = 0; i < saveItems.length; i++){
      if (saveItems[i].id == id) {
        saveItems[i].editEnabled = true;
      }
    }

    this.setState({items: saveItems});
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

    const items = this.state.items;
    const editEnabled = items.editEnabled;

    return (
      <div className='container'>
        <div className="row">
          <div className="header">
            <h1 className="display-4">A Very Simple Todo App</h1>
            <p className="lead">Track all of the things</p>
            <hr className="my-4" />
          </div>
          <div className="form-group col-4">
            <Form 
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
          <div className="form-group col-8">
            <div className="card">
              <div className="card-header">
                View Todos
              </div>
              <div className="card-body">
                {items.map((item) => {
                  return (
                    editEnabled ? (<UpdateItem todo={this.todo}
                      priority={this.priority}
                      save={this.handleSave} />)
                :
                    (<List
                    key={item.id}
                    todo={item.todo}
                    priority={item.priority}
                    id={item.id}
                    // editEnabled={item.editEnabled}

                    // handleSave={this.handleSave}
                    delete={this.deleteItem}
                    handleEdit={this.handleEdit} />)
                    );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
