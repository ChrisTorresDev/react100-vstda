import React, { Component } from 'react';
// import UpdateItem from './UpdateItem';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items,
      todo: this.props.todo,
      priority: this.props.priority,
      id: this.props.id
    }
    // this.handleSave = this.handleSave.bind(this);
  };

  priorityClass(priority) {
    switch (priority) {
      case '1':
        return 'list-group-item-danger';
      case '2':
        return 'list-group-item-warning';
      case '3':
        return 'list-group-item-success';
    }
  }

  // edit(id) {
  //   this.props.edit(id);
  // }

  delete(id) {
    this.props.delete(id);
  }
  
  

  // handleSave(todo, priority) {
  //   this.setState({
  //     editEnabled: false,
  //     todo: todo,
  //     priority: priority
  //   });
  // }

  handleSave(id) {

    let saveItems = this.state.items;
    
    for (let i = 0; i < saveItems.length; i++){
      if (saveItems[i].id == id) {
        saveItems[i].editEnabled = true;
      }
    }

    this.setState({items: saveItems});
  }


  render() {
  //   const editEnabled = this.props.editEnabled;
    return (
      // editEnabled ? (<UpdateItem todo={this.todo}
      //       priority={this.priority}
      //       save={this.handleSave} />)
      // :
      <div className="card">
      <div className={this.priorityClass(this.props.priority)} >
        <input type="checkbox"/>
        <label value='todo'>{this.props.todo}</label>
        <button onClick={() => this.props.handleEdit(this.props.id)}><span><i className='far fa-edit'></i></span></button>
        <button onClick={() => this.props.delete(this.props.id)}><span><i className='fas fa-trash-alt'></i></span></button>
      </div>
      </div>
    );
  }
}

export default List;