import React, { Component } from 'react';

class TodoItems extends Component {
    render() {
        return (
            <li className="todoItmes">
                {this.props.todo.title}
            </li>
        );
    }
}

export default TodoItems;