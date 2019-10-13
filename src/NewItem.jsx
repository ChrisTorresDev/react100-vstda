import React, { Component } from 'react';

class NewItem extends Component {
  constructor(props) {
    super(props)
    
    this.markDone = this.markDone.bind(this)
  
  };


markDone(isDone){
  if (isDone) {
    return 'line-through';
  } else {
    return 'none';
  }
}


  render() {
    return (
      <div className="card d-flex bd-highlight" style={{ display: this.props.showNormalItem(this.props.editEnabled)}}>
      <div className={this.props.priorityClass(this.props.priority)} >
        <input className="p-2" type="checkbox" name='isDone' href='#' onClick={() => this.props.completedTodo(this.props.id)}/>
        <label className="p-2 flex-grow-1 bd-highlight" value='todo' style={{textDecoration: this.markDone(this.props.isDone)}}>{this.props.todo}</label>
        <a onClick={() => this.props.handleEdit(this.props.id)}><span><i className='p-2 bd-highlight float-right far fa-edit edit-todo'></i></span></a>
        <a onClick={() => this.props.deleteItem(this.props.id)}><span><i className='p-2 bd-highlight float-right fas fa-trash-alt delete-todo'></i></span></a>
      </div>
      </div>
    );
  }
}

export default NewItem;