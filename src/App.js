import React from "react";
import { buttonStyle } from "./styles";
import Counter from "./Counter";
import Todo from "./Todo";

const ROUTES = {
  HOME: "HOME",
  COUNTER: "COUNTER",
  TODO: "TODO"
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      route: ROUTES.HOME,
      count: 0,
      todo: []
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  handleAddTodo = newTodo => {
    this.setState({
      todo: this.state.todo.concat([newTodo])
    });
  };

  handleLocationChange = newRoute => () => this.setState({ route: newRoute });

  renderBody = () => {
    switch (this.state.route) {
      case ROUTES.COUNTER:
        return (
          <Counter
            count={this.state.count}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        );
      case ROUTES.TODO:
        return <Todo todo={this.state.todo} onAddTodo={this.handleAddTodo} />;
      case ROUTES.HOME:
      default:
        return <h1>👋 Welcome 👋</h1>;
    }
  };

  render() {
    return (
      <div>
        <div>
          <span
            style={buttonStyle}
            onClick={this.handleLocationChange(ROUTES.HOME)}
          >
            Home
          </span>
          <span
            style={buttonStyle}
            onClick={this.handleLocationChange(ROUTES.COUNTER)}
          >
            Counter
          </span>
          <span
            style={buttonStyle}
            onClick={this.handleLocationChange(ROUTES.TODO)}
          >
            Todo
          </span>
        </div>

        {this.renderBody()}
      </div>
    );
  }
}

export default App;
