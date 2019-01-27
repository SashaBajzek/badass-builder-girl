import React, { Component } from "react";
import Shirt from "../Shirt/Shirt";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>To Simone Giertz: Thank you for the inspiration</h1>
        </header>
        <Shirt />
      </div>
    );
  }
}

export default App;
