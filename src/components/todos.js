import React, { Component } from 'react';
import TodoItems from './todoItems';

class Todos extends Component {
    // state = {}

    render() {
        let todoItems;

        if (this.props.todos) {
            todoItems = this.props.todos.map(todo => {
                return <TodoItems key={todo.id} todo={todo} />
            })
        }
        return (
            <div className="todos-cnt">
                {todoItems}
            </div>
        );
    }
}

export default Todos;