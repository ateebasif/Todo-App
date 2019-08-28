import React, { Component } from 'react';

class Addtodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    };

    onChange(e) {
        return (
            this.setState({ [e.target.name]: e.target.value })
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} style={{ display: "flex" }} >
                    <input
                        style={{ flex: "10", padding: "10px 40px" }}
                        type="text"
                        name="title"
                        placeholder="Add todo.."
                        value={this.state.title}
                        onChange={this.onChange.bind(this)}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        style={{ flex: "1", padding: "10px 20px", color: "black", cursor: "pointer", display: "inline-block", border: " none" }}

                    />
                </form>

            </div>);
    }
}

let btnsty = {
    display: "inline-block",
    border: " none",
    color: "black",
    padding: "7px, 20px",
    cursor: "pointer"
}

export default Addtodo