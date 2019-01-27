import React, { Component } from "react";
import "./Shirt.scss";
import GoogleEyes from "../GoogleEyes/GoogleEyes";

class Shirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0
    };
  }

  updateLight = event => {
    this.setState({ mouseX: event.clientX, mouseY: event.clientY });
    console.log("mouseX", this.state.mouseX);
    console.log("mouseY", this.state.mouseY);
  };

  componentWillMount() {
    window.addEventListener("mousemove", this.updateLight);
  }

  render() {
    return (
      <div className="Shirt">
        <GoogleEyes mouseX={this.state.mouseX} mouseY={this.state.mouseY} />
        <GoogleEyes mouseX={this.state.mouseX} mouseY={this.state.mouseY} />
      </div>
    );
  }
}

export default Shirt;
