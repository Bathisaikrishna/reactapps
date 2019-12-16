import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Events(props) {
  const clickHandler = console.log();
  return <button onClick={clickHandler}>Make event</button>;
}

class Reloader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
    this.submitForm = this.submitForm.bind(this);
    this.changeChar = this.changeChar.bind(this);
  }
  submitForm(event) {
    if (this.state.content !== "reload") {
      console.log(this.state.content);
      event.preventDefault();
    }
  }
  changeChar(event) {
    this.setState({ content: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          value={this.state.content}
          onChange={this.changeChar}
        />
        <input type="Submit" value="Submit" />
      </form>
    );
  }
}

class EvenCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event) {
    this.setState({ clicks: this.state.clicks + 1 });
    if (this.state.clicks % 2 === 0) {
      this.props.onEvenClick(this.state.clicks);
    }
  }
  render() {
    return (
      <div onClick={this.clickHandler}>
        This Component clicked {this.state.clicks} times.
      </div>
    );
  }
}
ReactDOM.render(<Events />, document.getElementById("root"));
ReactDOM.render(<Reloader />, document.getElementById("root"));
ReactDOM.render(
  <EvenCounter
    onEvenClick={data => {
      console.log(data);
    }}
  />,
  document.getElementById("root")
);
