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

  componentDidMount() {
    this.updateEyeSize();
  }

  updateEyeSize = () => {
    console.log("updateEyeSize");
    let newEyeSize = this.props.windowDimensions.windowWidth / 10;
    this.setState({ eyeSize: newEyeSize });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.windowDimensions.windowWidth !==
      prevProps.windowDimensions.windowWidth
    ) {
      this.updateEyeSize();
    }
  }

  render() {
    const { eyeSize } = this.state;
    const { mouseX, mouseY } = this.props.mouseLocation;
    const { windowHeight, windowWidth } = this.props.windowDimensions;
    return (
      <div className="Shirt">
        <h2>All Eyes On You</h2>
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
        />
      </div>
    );
  }
}

const ShirtWithMouseTouchLocation = withMouseTouchLocation(Shirt);

export default ShirtWithMouseTouchLocation;
