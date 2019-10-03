import React, { Component } from 'react';
import UpdateItem from './UpdateItem';
import './App';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.handleDeleteRow = this.handleDeleteRow.bind(this)
  };


  

  handleDeleteRow(i) {
    let items = [...this.state.items]
    items.splice(i, 1)
    this.setState({ 
      items: items
    })
  }

  render() {
    const items = this.props.items;
    const updateItems = this.props.updateItems;


    return (
      <div className="card">
        <div className="card-header">
          View Todos
        </div>
        <div className="card-body">
          <div id="Table">
            <table>
              <tbody>
                {items.map((item, i) => {
                  return (
                    <tr className="alert alert-danger" role="alert" key={i}>
                      <td className="todo-checkbox"><input type="checkbox" aria-label="checkbox for todo item"/></td>
                      <td className='todo-item'>{item.todo}</td>
                      <td><a className="edit-todo"><i className='far fa-edit'></i></a></td>
                      <td><a className="delete-todo"><i className='fas fa-trash-alt' onClick={i => this.handleDeleteRow(i)}></i></a></td>
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