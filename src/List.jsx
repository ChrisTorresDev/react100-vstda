import React, { Component } from 'react';
import UpdateItem from './UpdateItem';
import NewItem from './NewItem';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items,
    }
    this.showEditItem = this.showEditItem.bind(this)
    this.showNormalItem = this.showNormalItem.bind(this)
  };

showEditItem(editEnabled){
  if(editEnabled){
    return 'block';
  } else{
    return 'none';
  }
}

showNormalItem(editEnabled){
  if(editEnabled){
    return 'none';
  } else{
    return 'block';
  }
}

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

  render() {
    const items = this.props.items;
    return (
      <div>
        <div>
          {items.map((item) => {
            return (
              <UpdateItem 
                key={item.id}
                todo={item.todo}
                priority={item.priority}
                id={item.id}
                editEnabled={item.editEnabled}
                isDone={item.isDone}

                handleSave={this.props.handleSave} 
                completedTodo={this.props.completedTodo}
                showEditItem={this.showEditItem}
                showNormalItem={this.showNormalItem}
                />
            )
          })}
        </div>

        <div>
          {items.map((item) => {
            return (
              <NewItem 
                key={item.id}
                todo={item.todo}
                priority={item.priority}
                id={item.id}
                editEnabled={item.editEnabled}
                isDone={item.isDone}

                showEditItem={this.showEditItem}
                showNormalItem={this.showNormalItem}
                priorityClass={this.priorityClass}
                handleEdit={this.props.handleEdit}
                deleteItem={this.props.deleteItem}
                completedTodo={this.props.completedTodo}
                />
            )
          })}
        </div>
      </div>
    )
  }
}

export default List;