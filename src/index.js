import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Events(props){
  const clickHandler = console.log();
  return(<button onClick={clickHandler}>Make event</button>);
}


ReactDOM.render(<Events/>, document.getElementById("root"));
ReactDOM.render(<Reloader/>, document.getElementById("roo"))