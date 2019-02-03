import React, { Component } from "react";
import "./Shirt.scss";
import GooglyEyes from "../GooglyEyes/GooglyEyes";
import withMouseTouchLocation from "../withMouseTouchLocation/withMouseTouchLocation";

class Shirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeSize: 100
    };
  }

  render() {
    const { eyeSize } = this.state;
    const { mouseX, mouseY } = this.props.mouseLocation;
    const { zeroX, zeroY } = this.props.originLocation;
    return (
      <div className="Shirt">
        <h2>All Eyes On You</h2>
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          zeroX={zeroX}
          zeroY={zeroY}
          eyeSize={eyeSize}
        />
      </div>
    );
  }
}

const ShirtWithMouseTouchLocation = withMouseTouchLocation(Shirt);

export default ShirtWithMouseTouchLocation;
