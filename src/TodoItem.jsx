import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <div className="card-body">
                <div className="input-group todo-item">
                    <div className="todo-checkbox">
                        <input type="checkbox" aria-label="checkbox for todo item"/>
                    </div>
                    <div className="col-10">
                        <p className="item-title">This is item one</p>
                    </div>
                    <div className="col aline-self-end">
                        <a href="#" className="edit-todo"><i className='far fa-edit'></i></a>
                        <a href="#" className="delete-todo"><i className='fas fa-trash-alt'></i></a>
                    </div>
                </div>
            </div>
        );
    }
}


export default TodoItem