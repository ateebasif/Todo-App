import React, { Component } from 'react';
import TodoItems from './TodoItems';

class Todos extends Component {
    // state = {}

    render() {
        return (this.props.todos.map(todo => (
            <TodoItems
                key={todo.id}
                todo={todo}
                markComplete={this.props.markComplete}

                delTodo={this.props.delTodo} />
        )));
    }
}

export default Todos;