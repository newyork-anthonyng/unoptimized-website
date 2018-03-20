import React from "react";
import { buttonStyle } from "./styles";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  handleAddTodoClick = () => {
    this.props.onAddTodo(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="add new todo"
          onChange={this.handleInputChange}
          value={this.state.input}
        />
        <span style={buttonStyle} onClick={this.handleAddTodoClick}>
          Add todo
        </span>
        <ul>{this.props.todo.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    );
  }
}

export default Todo;
