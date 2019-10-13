import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: '',
            priority: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    };



    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div id="form">
                <div className="card">
                    <div className="card-header">
                        Add New Todo
                    </div>
                    <div className="card-body">
                        <label htmlFor="todo">I want to..</label>
                        <textarea name="todo" className="create-todo-text" value={this.state.todo} onChange={this.handleInputChange} type='text'></textarea>
                        <label htmlFor="priority">How much of a priority is this?</label>
                        <select name="priority" id="priority" className="create-todo-priority" value={this.state.priority} onChange={this.handleInputChange} >
                            <option value="0">Select</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </div>
                    <div className="card-footer">
                        <button className='create-todo' id='add-item' onClick={() => this.props.handleFormSubmit(this.state.todo, this.state.priority)}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;