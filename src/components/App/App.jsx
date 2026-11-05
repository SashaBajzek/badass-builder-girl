import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Shirt from "../Shirt/Shirt";
import "./App.scss";
import simoneShirt from "./simone-shirt.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>To Simone Giertz: Thank you for the inspiration</h1>
        </header>
        <a
          className="App__photo"
          href="https://www.instagram.com/p/BixCJbcgn5J/"
          title="Simone Giertz's googly eye shirt, on Instagram"
        >
          <img
            className="App__img"
            alt="Simone Giertz wearing her googly eye shirt"
            src={simoneShirt}
            width={293}
            height={400}
          />
        </a>
        <Shirt />
        <Footer />
      </div>
    );
  }
}

export default App;
