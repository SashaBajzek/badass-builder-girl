import React, { Component } from "react";
import "./Shirt.scss";
import GooglyEyes from "../GooglyEyes/GooglyEyes";

class Shirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeSize: 100,
      mouseX: 0,
      mouseY: 0
    };
  }

  trackMouse = event => {
    this.setState({ mouseX: event.clientX, mouseY: event.clientY });
  };

  componentWillMount() {
    window.addEventListener("mousemove", this.trackMouse);
  }

  render() {
    const { eyeSize, mouseX, mouseY } = this.state;
    return (
      <div className="Shirt">
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
      </div>
    );
  }
}

export default Shirt;
