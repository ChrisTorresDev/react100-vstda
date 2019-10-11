import React, { Component } from 'react';


class UpdateItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: this.props.todo,
            priority: this.props.priority,
            id: this.props.id
        }
        this.handleChange = this.handleChange.bind(this);
      };

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      save(id) {
        this.props.save(id);
      }
      

    render() {

        return (
            <div id="updateItem">
                <div>
                    <div className="card-body">
                        <label htmlFor="todo">Description</label>
                        <textarea name="updateTodo" className="update-todo-text" defaultValue={this.state.todo} onChange={this.handleChange} />
                        <label htmlFor="priority">Priority</label>
                        <select name="updatePriority" id="priority" className="update-todo-priority" defaultValue={this.state.priority} onChange={this.handleChange} >
                            <option value="0">Select</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                        <button className='update-todo' onClick={this.props.save(this.props.id)}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateItem;