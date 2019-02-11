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

  createEyeRow = (keyName, numEyes) => {
    const { eyeSize } = this.state;
    const { mouseX, mouseY } = this.props.mouseLocation;
    const { windowHeight, windowWidth } = this.props.windowDimensions;
    let eyes = [];
    for (let i = 0; i < numEyes; i++) {
      eyes.push(
        <GooglyEyes
          mouseX={mouseX}
          mouseY={mouseY}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          eyeSize={eyeSize}
          key={keyName + "_" + i}
        />
      );
    }
    return eyes;
  };

  createBlankRow = (keyName, numBlanks) => {
    const { eyeSize } = this.state;
    let blanks = [];
    for (let i = 0; i < numBlanks; i++) {
      blanks.push(<GooglyEyeBlank eyeSize={eyeSize} key={keyName + "_" + i} />);
    }
    return blanks;
  };

  render() {
    return (
      <div className="Shirt">
        <h2>All Eyes On You</h2>
        <div className="Shirt__row Shirt__row--1">
          {this.createBlankRow("row-1-a", 2)}
          {this.createEyeRow("row-1-b", 3)}
          {this.createBlankRow("row-1-c", 2)}
          {this.createEyeRow("row-1-d", 3)}
          {this.createBlankRow("row-1-e", 2)}
        </div>
        <div className="Shirt__row Shirt__row--2">
          {this.createBlankRow("row-2-a", 1)}
          {this.createEyeRow("row-2-b", 10)}
          {this.createBlankRow("row-2-c", 1)}
        </div>
        <div className="Shirt__row Shirt__row--3">
          {this.createEyeRow("row-3", 12)}
        </div>
        <div className="Shirt__row Shirt__row--4">
          {this.createBlankRow("row-4-a", 1)}
          {this.createEyeRow("row-4-b", 1)}
          {this.createBlankRow("row-4-c", 1)}
          {this.createEyeRow("row-4-d", 6)}
          {this.createBlankRow("row-4-e", 1)}
          {this.createEyeRow("row-4-f", 1)}
          {this.createBlankRow("row-4-g", 1)}
        </div>
        <div className="Shirt__row Shirt__row--5">
          {this.createBlankRow("row-5-a", 3)}
          {this.createEyeRow("row-5-b", 6)}
          {this.createBlankRow("row-5-c", 3)}
        </div>
        <div className="Shirt__row  Shirt__row--6">
          {this.createBlankRow("row-6-a", 3)}
          {this.createEyeRow("row-6-b", 6)}
          {this.createBlankRow("row-6-c", 3)}
        </div>
        <div className="Shirt__row  Shirt__row--7">
          {this.createBlankRow("row-7-a", 3)}
          {this.createEyeRow("row-7-b", 6)}
          {this.createBlankRow("row-7-c", 3)}
        </div>
        <div className="Shirt__row  Shirt__row--8">
          {this.createBlankRow("row-8-a", 3)}
          {this.createEyeRow("row-8-b", 6)}
          {this.createBlankRow("row-8-c", 3)}
        </div>
        <div className="Shirt__row  Shirt__row--9">
          {this.createBlankRow("row-9-a", 3)}
          {this.createEyeRow("row-9-b", 6)}
          {this.createBlankRow("row-9-c", 3)}
        </div>
      </div>
    );
  }
}

const ShirtWithMouseTouchLocation = withMouseTouchLocation(Shirt);

export default ShirtWithMouseTouchLocation;
