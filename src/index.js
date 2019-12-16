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
ReactDOM.render(<Events />, document.getElementById("root"));
ReactDOM.render(<Reloader />, document.getElementById("root"));
