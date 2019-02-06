import React, { Component } from "react";
import "./Shirt.scss";
import GooglyEyes from "../GooglyEyes/GooglyEyes";
import GooglyEyeBlank from "../GooglyEyes/GooglyEyeBlank";
import withMouseTouchLocation from "../withMouseTouchLocation/withMouseTouchLocation";

class Shirt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eyeSize: null
    };
  }

  componentDidMount() {
    this.updateEyeSize();
  }

  updateEyeSize = () => {
    console.log("updateEyeSize");
    let newEyeSize = this.props.windowDimensions.windowWidth / 12;
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
        <div className="Shirt__row Shirt__row--1">
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
        <div className="Shirt__row Shirt__row--2">
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
        <div className="Shirt__row Shirt__row--3">
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
        <div className="Shirt__row Shirt__row--4">
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyes
            mouseX={mouseX}
            mouseY={mouseY}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
            eyeSize={eyeSize}
          />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyes
            mouseX={mouseX}
            mouseY={mouseY}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
            eyeSize={eyeSize}
          />
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
        <div className="Shirt__row Shirt__row--5">
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
        <div className="Shirt__row  Shirt__row--6">
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
        <div className="Shirt__row  Shirt__row--7">
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
        <div className="Shirt__row  Shirt__row--8">
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
        <div className="Shirt__row  Shirt__row--9">
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
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
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
          <GooglyEyeBlank eyeSize={eyeSize} />
        </div>
      </div>
    );
  }
}

const ShirtWithMouseTouchLocation = withMouseTouchLocation(Shirt);

export default ShirtWithMouseTouchLocation;
