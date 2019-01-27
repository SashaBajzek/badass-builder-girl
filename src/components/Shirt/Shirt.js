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

  shouldComponentUpdate(nextProps, nextState) {
    let diff = Math.abs(
      Math.sqrt(
        Math.pow(this.state.mouseX - nextState.mouseX, 2) +
          Math.pow(this.state.mouseY - nextState.mouseY, 2)
      )
    );
    if (diff > 1) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { eyeSize, mouseX, mouseY } = this.state;
    return (
      <div className="Shirt">
        <h2>All Eyes On You</h2>
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
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
        <GooglyEyes eyeSize={eyeSize} mouseX={mouseX} mouseY={mouseY} />
      </div>
    );
  }
}

export default Shirt;
