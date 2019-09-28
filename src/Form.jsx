import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
        <div id="form">
            <form onSubmit={this.props.handleFormSubmit}>
                <label htmlFor="todo">I want to..</label>
                <textarea name="todo" className="create-todo-text" value={this.props.newTodo} onChange={this.props.handleInputChange} />
                <label htmlFor="priority">How much of a priority is this?</label>
                <select name="priority" id="priority" className="create-todo-priority" value={this.props.newPriority} onChange={this.props.handleInputChange} >
                    <option value="0">Select a Priority</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>
                <button type="submit" value="Submit">Add</button>
            </form>
        </div>
        );
    }
}

export default Form;