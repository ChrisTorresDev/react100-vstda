import React, { Component } from 'react';


class UpdateItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateTodo: this.props.todo,
            updatePriority: this.props.priority,
            updateItems: this.props.items,
            updateId: this.props.id
        }
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
        this.handleUpdateChange = this.handleUpdateChange.bind(this);
    };

    handleUpdateSubmit(e) {
        e.preventDefault();

        let updateItems = [...this.state.updateItems];

        updateItems.push({
            updateTodo: this.state.updateTodo,
            updatPriority: this.state.updatePriority
        });

        this.setState({
            updateItems,
            updateTodo: '',
            UpdatePriority: ''
        });
    };

    handleUpdateChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div id="updateItem">
                <UpdateItem onSubmit={this.props.handleUpdateSubmit}>
                    <div className="card-body">
                        <label htmlFor="updateTodo">Description</label>
                        <textarea name="updateTodo" className="update-todo-text" value={this.props.newTodo} onChange={this.props.handleUpdateChange} />
                        <label htmlFor="updatePriority">Priority</label>
                        <select name="updatePriority" id="updatePriority" className="update-todo-priority" value={this.props.newPriority} onChange={this.props.handleUpdateChange} >
                            <option value="0">Select a Priority</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </div>
                    <div className="card-footer">
                        <button className='update-todo' type="submit" value="Submit">Save</button>
                    </div>
                </UpdateItem>
            </div>
        );
    }
}

export default UpdateItem;