import React, { Component } from 'react';

class NewItem extends Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      <div className="card" style={{ display: this.props.showNormalItem(this.props.editEnabled)}}>
      <div className={this.props.priorityClass(this.props.priority)} >
        <input type="checkbox"/>
        <label value='todo'>{this.props.todo}</label>
        <a onClick={() => this.props.handleEdit(this.props.id)}><span><i className='far fa-edit'></i></span></a>
        <a onClick={() => this.props.deleteItem(this.props.id)}><span><i className='fas fa-trash-alt'></i></span></a>
      </div>
      </div>
    );
  }
}

export default NewItem;