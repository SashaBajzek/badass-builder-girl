import React, { Component } from "react";
import "./Shirt.scss";
import GooglyEyes from "../GooglyEyes/GooglyEyes";

class Shirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeSize: 160,
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
        <GooglyEyes
          eyeSize={this.state.eyeSize}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
        <GooglyEyes
          eyeSize={this.state.eyeSize}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
        <GooglyEyes
          eyeSize={this.state.eyeSize}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
        <GooglyEyes
          eyeSize={this.state.eyeSize}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
        <GooglyEyes
          eyeSize={this.state.eyeSize}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
        <GooglyEyes
          eyeSize={this.state.eyeSize}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
      </div>
    );
  }
}

export default Shirt;
