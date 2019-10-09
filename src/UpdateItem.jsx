import React, { Component } from 'react';
import './App';


class UpdateItem extends Component {
    // // constructor(props) {
    // //     super(props)
    // //     this.state = {
    // //       todo: props.items.todo,
    // //       priority: props.items.priority,
    //     //   items: props.items,
    //     }
    //     // this.handleUpdateSubmit = this.handleFormSubmit.bind(this);
    //     // this.handleUpdateChange = this.handleInputChange.bind(this);
    //   };
    
    //   handleUpdateSubmit(e) {
    //     e.preventDefault();
    
    //     let items = [...this.state.items];
    
    //     items.push({
    //       todo: this.state.todo,
    //       priority: this.state.priority,
    //     });
    
    //     this.setState({
    //       items,
    //       todo: '',
    //       priority: '',
    //     });
    //   };
    
    //   handleUpdateChange(e) {
    //     this.setState({ [e.target.name]: e.target.value });
    //   };

    render() {
        
        return (
            <div id="updateItem">
                <form onSubmit={this.handleUpdateSubmit}>
                    <div className="card-body">
                        <label htmlFor="updateTodo">Description</label>
                        <textarea name="todo" className="update-todo-text" value={this.props.UpdateTodo} onChange={this.props.handleUpdateChange} />
                        <label htmlFor="priority">Priority</label>
                        <select name="priority" id="updatePriority" className="update-todo-priority" value={this.props.updatePriority} onChange={this.props.handleUpdateChange} >
                            <option value="0">Select a Priority</option>
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                        <button className='update-todo' type="submit" value="Submit" >Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UpdateItem;