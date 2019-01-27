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
  }

  refCallback = element => {
    if (element) {
      let size = element.getBoundingClientRect();
      let circleY = (size.top + size.bottom) / 2;
      let circleX = (size.left + size.right) / 2;
      this.setState({ size, circleX, circleY });
    }
  };

  getPupilLoc = () => {
    const { eyeSize, mouseX, mouseY } = this.props;
    const { circleX, circleY } = this.state;
    let pupilX = 80;
    let pupilY = 80;
    let distanceToMouse = Math.sqrt(
      Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2)
    );
    let angle = Math.atan((circleY - mouseY) / (circleX - mouseX));
    if (distanceToMouse < 0.15625 * eyeSize) {
      pupilX = mouseX - circleX + eyeSize / 2;
      pupilY = mouseY - circleY + eyeSize / 2;
    } else if (mouseX < circleX) {
      pupilX = 0.5 * eyeSize - 0.15625 * eyeSize * Math.cos(angle);
      pupilY = 0.5 * eyeSize - 0.15625 * eyeSize * Math.sin(angle);
    } else if (mouseX > circleX) {
      pupilX = 0.5 * eyeSize + 0.15625 * eyeSize * Math.cos(angle);
      pupilY = 0.5 * eyeSize + 0.15625 * eyeSize * Math.sin(angle);
    }
    return { pupilX, pupilY };
  };

  render() {
    const { eyeSize } = this.props;
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
          cx={this.getPupilLoc().pupilX}
          cy={this.getPupilLoc().pupilY}
          r={0.15625 * eyeSize}
          fill="#222222"
        />
      </svg>
    );
  }
}

export default GooglyEyes;
