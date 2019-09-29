import React, { Component } from 'react';
import './App';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    console.log(items);
    return (
      <div className="card">
        <div className="card-header">
          View Todos
        </div>
        <div className="card-body">
          <div id="Table">
            <table>
              <tbody>
                <tr>
                  <th>Todo</th>
                  <th>Priority</th>
                </tr>
                {items.map(item => {
                  return (
                    <tr>
                      <td><input type="checkbox" aria-label="checkbox for todo item"/></td>
                      <td>{item.todo}</td>
                      <td><a href="#" className="delete-todo"><i className='fas fa-trash-alt'></i></a></td>
                      <td><a href="#" className="edit-todo"><i className='far fa-edit'></i></a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;