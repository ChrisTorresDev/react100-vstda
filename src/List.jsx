import React, { Component } from 'react';
import './App';
import UpdateItem from './UpdateItem';


class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editEnabled: false,
      todo: props.items.todo,
      priority: props.items.priority,
      items: props.items,
    }
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    // this.handleSave = this.handleSave.bind(this);
  }

  handleUpdateSubmit(e) {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      todo: this.state.todo,
      priority: this.state.priority,
    });

    this.setState({
      items,
      todo: '',
      priority: '',
    });
  };

  handleUpdateChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };


  delete(id) {
    this.props.delete(id);
  }

  handleEdit() {
    this.setState({
      editEnabled: true
    });
  }

  // handleUpdateChange(e) {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }

  // handleSave(todo, priority) {
  //   this.setState({
  //     editEnabled: false, todo: todo, priority: priority
  //   });
  // }

  render() {

    const items = this.props.items;
    const editEnabled = this.state.editEnabled;

    return (
      <div className="card">
        <div className="card-header">
          View Todos
        </div>
        <div className="card-body">
          <div id="Table">
            <ul className="list-group">
              {items.map((item) => {
                return (
                  editEnabled ? (<UpdateItem 
                  // editEnabled ? (<UpdateItem handleSave={this.handleSave}
                    handleUpdateSubmit={this.handleUpdateSubmit}
                    handleUpdateChange={this.handleUpdateChange}
                    updateTodo={this.state.todo}
                    updatePriority={this.state.priority} />)
                    :
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <input type="checkbox" aria-label="checkbox for todo item" /> {item.todo}
                      <span>
                        <a className="edit-todo"><i className='far fa-edit' onClick={() => this.handleEdit(item.id)}></i></a>
                      </span>
                      <span>
                        <a className="delete-todo"><i className='fas fa-trash-alt' onClick={() => this.delete(item.id)}></i></a>
                      </span>
                    </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;