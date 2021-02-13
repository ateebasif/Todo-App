import React, { Component } from 'react';

class TodoItems extends Component {
    // state = {}

    render() {

        const { title, id } = this.props.todo;

        let getStyle = {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            color: "blue",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }

        return (
            <div  >
                <p style={getStyle} >
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >
                        x
                    </button>
                </p>

            </div>
        );
    }
}

const btnStyle = {
    // background: "#ff0000",
    color: "blue",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"

};

const btnStyle1 = {
    background: "aqua",
    color: "blue",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"

};


export default TodoItems;