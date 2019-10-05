import React, { Component } from 'react';
import './App';

class Table extends React.Component {

  update(id) {
    this.props.update(id);
  }

  delete(id) {
    this.props.delete(id);
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
                    <li className="list-group-item">
                      <input type="checkbox" aria-label="checkbox for todo item"/>{item.todo}
                      <span>
                        <a className="edit-todo"><i className='far fa-edit' onClick={() => this.update(item.todo)}></i></a>
                      </span>
                      <span>
                      <a className="delete-todo"><i className='fas fa-trash-alt' onClick={() => this.delete(item.id)}></i></a>
                      </span>
                    </li>
                  );
                })}
            </ul>
            {/* <table>
              <tbody>
                {items.map((item) => {
                  return (
                    <tr className="alert alert-danger" role="alert" >
                      <td className="todo-checkbox"><input type="checkbox" aria-label="checkbox for todo item"/></td>
                      <td className='todo-item'>{item.todo}</td>
                      <td><a className="edit-todo"><i className='far fa-edit' onClick={() => this.update(item.todo)}></i></a></td>
                      <td><a className="delete-todo"><i className='fas fa-trash-alt' onClick={() => this.delete(item.id)}></i></a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Table;