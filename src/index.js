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
//ReactDOM.render(<Events />, document.getElementById("root"));
//ReactDOM.render(<Reloader />, document.getElementById("root"));
/*ReactDOM.render(
  <EvenCounter
    onEvenClick={data => {
      console.log(data);
    }}
  />,
  document.getElementById("root")
);*/

class Heading extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}
class Task extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          value={this.props.done === true ? "checked" : ""}
        />
        {this.props.name}
      </li>
    );
  }
}

class TaskContainer extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { desc: "" };
  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state.desc);
    this.props.callback(this.state.desc);
    console.log("in handle submit");
  };
  handleChange(event) {
    this.setState({ desc: event.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.desc}
          onChange={event => this.setState({ desc: event.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
class ToDoApp extends React.Component {
  jobs = 0;
  tasks = [{ name: "task1", id: this.jobs++, done: true }];

  state = {
    taskList: this.tasks
  };

  myCallBack = desc => {
    const task = { name: desc, id: this.jobs++, done: false };
    let copy = this.state.taskList.slice();
    copy.push(task);

    this.setState({
      taskList: copy
    });
  };
  render() {
    return (
      <div>
        <Heading name="ToDoList App" />
        <TaskContainer tasks={this.state.taskList} />
        <Form callback={this.myCallBack} />
      </div>
    );
  }
}
render();
function render() {
  ReactDOM.render(<ToDoApp />, document.getElementById("root"));
}
