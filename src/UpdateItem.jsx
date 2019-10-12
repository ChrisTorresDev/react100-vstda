import React, { Component } from 'react';


class UpdateItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: this.props.todo,
            priority: this.props.priority,
        }
        this.handleChange = this.handleChange.bind(this);
      };

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    render() {

        return (
            <div id="updateItem">
                <div>
                    <div className="card-body" style={{ display: this.props.showEditItem(this.props.editEnabled)}}>
                        <label htmlFor="todo">Description</label>
                        <textarea name="todo" className="update-todo-text" defaultValue={this.state.todo} onChange={this.handleChange} />
                        <label htmlFor="priority">Priority</label>
                        <select name="priority" id="priority" className="update-todo-priority" defaultValue={this.state.priority} onChange={this.handleChange} >
                            <option value="0">Select</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                        <button className='update-todo' onClick={() => this.props.handleSave(this.props.id, this.state.todo, this.state.priority)}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateItem;