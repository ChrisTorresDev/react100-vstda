import React, { Component } from 'react';

class Table extends Component {
  render() {
    const items = this.props.items;
    return (
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
                  <td>{item.todo}</td>
                  <td>{item.priority}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;