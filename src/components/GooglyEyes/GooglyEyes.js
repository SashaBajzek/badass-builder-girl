import React, { Component } from "react";
import "./GooglyEyes.scss";

class GooglyEyes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleX: null,
      circleY: null,
      size: {}
    };
    this.element = null;
  }

  refCallback = element => {
    this.element = element;
    this.checkCircleLocation();
  };

  checkCircleLocation = () => {
    if (this.element) {
      let size = this.element.getBoundingClientRect();
      let circleX = (size.left + size.right) / 2;
      let circleY = (size.top + size.bottom) / 2;
      this.setState({ size, circleX, circleY });
    }
  };

  getPupilLoc = (mouseX, mouseY) => {
    const { eyeSize, zeroX, zeroY } = this.props;
    const { circleX, circleY } = this.state;
    const pupilRadius = 0.15625 * eyeSize;
    let pupilX = 80;
    let pupilY = 80;
    mouseX = mouseX - zeroX - pupilRadius;
    mouseY = mouseY - zeroY - pupilRadius;
    let distanceToMouse = Math.sqrt(
      Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2)
    );
    let angle = Math.atan((circleY - mouseY) / (circleX - mouseX));
    if (distanceToMouse <= pupilRadius) {
      pupilX = mouseX - circleX + eyeSize / 2;
      pupilY = mouseY - circleY + eyeSize / 2;
    } else if (mouseX <= circleX) {
      pupilX = 0.5 * eyeSize - pupilRadius * Math.cos(angle);
      pupilY = 0.5 * eyeSize - pupilRadius * Math.sin(angle);
    } else if (mouseX > circleX) {
      pupilX = 0.5 * eyeSize + pupilRadius * Math.cos(angle);
      pupilY = 0.5 * eyeSize + pupilRadius * Math.sin(angle);
    }
    return { pupilX, pupilY };
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   let prevLocation = this.getPupilLoc(this.props.mouseX, this.props.mouseY);
  //   let nextLocation = this.getPupilLoc(nextProps.mouseX, nextProps.mouseY);

  //   let size = this.element.getBoundingClientRect();
  //   let circleX = (size.left + size.right) / 2;
  //   let circleY = (size.top + size.bottom) / 2;
  //   this.setState({ size, circleX, circleY });

  //   let diff = Math.abs(
  //     Math.sqrt(
  //       Math.pow(prevLocation.pupilX - nextLocation.pupilX, 2) +
  //         Math.pow(prevLocation.pupilY - nextLocation.pupilY, 2)
  //     )
  //   );
  //   console.log("diff", diff);
  //   if (diff > 0.25) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.windowWidth !== nextProps.windowWidth ||
      this.props.windowHeight !== nextProps.windowHeight ||
      this.props.mouseX !== nextProps.mouseX ||
      this.props.mouseY !== nextProps.mouseY
    ) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.windowWidth !== prevProps.windowWidth ||
      this.props.windowHeight !== prevProps.windowHeight
    ) {
      this.checkCircleLocation();
    }
  }

  render() {
    const { eyeSize, mouseX, mouseY } = this.props;
    return (
      <svg
        width={eyeSize}
        height={eyeSize}
        ref={this.refCallback}
        className="GooglyEyes"
      >
        <defs>
          <filter id="GooglyEyess">
            <feGaussianBlur stdDeviation="3" result="blur4" />
            <feSpecularLighting
              result="light"
              in="blur4"
              specularExponent="6"
              lightingColor="#ffffff"
            >
              <fePointLight x="0" y="100" z="200" />
            </feSpecularLighting>
            <feComposite in="light" in2="blur4" operator="in" result="lit" />
          </filter>
        </defs>
        <circle
          cx={0.09375 * eyeSize}
          cy={eyeSize / 2}
          r={0.09375 * eyeSize}
          strokeWidth={0.0625 * eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={0.90625 * eyeSize}
          cy={eyeSize / 2}
          r={0.09375 * eyeSize}
          strokeWidth={0.0625 * eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={eyeSize / 2}
          cy={0.90625 * eyeSize}
          r={0.09375 * eyeSize}
          strokeWidth={0.0625 * eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={eyeSize / 2}
          cy={0.09375 * eyeSize}
          r={0.09375 * eyeSize}
          strokeWidth={0.0625 * eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={eyeSize / 2}
          cy={eyeSize / 2}
          r={0.3125 * eyeSize}
          strokeWidth="1"
          stroke="#cccccc"
        />
        <circle
          cx={eyeSize / 2}
          cy={eyeSize / 2}
          r={0.3125 * eyeSize}
          fill="#ffffff"
          filter="url(#GooglyEyess)"
        />
        <circle
          cx={this.getPupilLoc(mouseX, mouseY).pupilX}
          cy={this.getPupilLoc(mouseX, mouseY).pupilY}
          r={0.15625 * eyeSize}
          fill="#222222"
        />
      </svg>
    );
  }
}

export default GooglyEyes;
