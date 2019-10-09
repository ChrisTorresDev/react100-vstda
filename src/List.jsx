import React, { Component } from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      priority: props.priority
    }
  };


  priorityClass(priority) {
    switch (priority) {
      case '1':
        return 'list-group-item-warning';
      case '2':
        return 'list-group-item-success';
      case '3':
        return 'list-group-item-danger';
    }
  }

  delete(id) {
    this.props.delete(id);
  }

  edit(id) {
    this.props.edit(id);
  }

  render() {

    const items = this.props.items;
    const priority = items.priority;

    return (
      <div id="Table">
        <ul className="list-group">
          {items.map((item) => {
            return (
              <li className={this.priorityClass(priority)}>
                {/* <li className="list-group-item d-flex justify-content-between align-items-center"> */}
                <input type="checkbox" aria-label="checkbox for todo item" /> {item.todo}
                <span>
                  <a className="edit-todo"><i className='far fa-edit' onClick={() => this.edit(item.id)}></i></a>
                </span>
                <span>
                  <a className="delete-todo"><i className='fas fa-trash-alt' onClick={() => this.delete(item.id)}></i></a>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;