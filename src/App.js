import React, { Component } from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./js/components/hello"



class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
          <HelloWorld/>
      </div>
    );
  }
}
export default App;