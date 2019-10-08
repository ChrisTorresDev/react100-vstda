import React, { Component } from 'react';
import './App';
import UpdateItem from './UpdateItem';


class List extends React.Component {

  delete(id) {
    this.props.delete(id);
  }

  editing(id) {
    this.props.editing(id);
  }

  render() {

    const items = this.props.items;

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
                  this.props.editIdx === item.id ? (<UpdateItem onChange={(e) => handleUpdateChange(e, items, i)} />)
                    // name={items.name} value={items.value} 
                    : 
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <input type="checkbox" aria-label="checkbox for todo item" /> {item.todo}
                    <span>
                      <a className="edit-todo"><i className='far fa-edit' onClick={() => this.editing(item.id)}></i></a>
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