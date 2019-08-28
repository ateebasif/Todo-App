import React, { Component } from 'react';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import Header from './components/layout/Header';
let uuid = require('uuid');

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [{
                id: uuid.v4(),
                title: "Complete Todo Task",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "New Todo item ",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "something",
                completed: false
            }]
        }
    }

    // Toggle Complete
    markComplete(id) {

        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                    console.log(todo);
                }
                return todo;
            })
        });


    }

    // Delete Todo
    delTodo(id) {
        console.log('delete', id);

        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })

    }

    // Add Todo''

    addTodo(title) {
        console.log('Addtodo ', title);

        if (title === "") {
            console.log('empty');
            return
        }

        else {
            const newTodo = {
                id: uuid.v4(),
                title,
                completed: false
            }

            this.setState({
                todos: [...this.state.todos, newTodo]
            })
        }
    }


    render() {

        return (
            <div>
                < Header />

                <Todos todos={this.state.todos} markComplete={this.markComplete.bind(this)}
                    delTodo={this.delTodo.bind(this)}
                />
                <Addtodo addTodo={this.addTodo.bind(this)} />

            </div>
        );
    }
}

export default App;