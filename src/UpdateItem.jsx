import React, { Component } from 'react';


class UpdateItem extends Component {
    render() {
        
        return (
            <div id="updateItem">
                <form onSubmit={this.props.handleUpdateSubmit}>
                    <div className="card-body">
                        <label htmlFor="updateTodo">Description</label>
                        <textarea name="updateTodo" className="update-todo-text" value={this.props.UpdateTodo} onChange={this.props.handleUpdateChange} />
                        <label htmlFor="updatePriority">Priority</label>
                        <select name="updatePriority" id="updatePriority" className="update-todo-priority" value={this.props.updatePriority} onChange={this.props.handleUpdateChange} >
                            <option value="0">Select a Priority</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                        <button className='update-todo' type="submit" value="Submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UpdateItem;