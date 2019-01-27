import React, { Component } from "react";
import "./GooglyEyes.scss";

class GooglyEyes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pupilX: this.props.eyeSize / 2,
      pupilY: this.props.eyeSize / 2,
      size: {}
    };
  }

  refCallback = element => {
    console.log("refCallback");
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
    let pupilX = this.state.pupilX;
    let pupilY = this.state.pupilY;
    let distanceToMouse = Math.sqrt(
      Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2)
    );
    let angle = Math.atan((circleY - mouseY) / (circleX - mouseX));
    if (distanceToMouse < 0.15625 * eyeSize) {
      pupilX = mouseX - circleX + eyeSize / 2;
      pupilY = mouseY - circleY + eyeSize / 2;
    } else if (mouseX < circleX && mouseY < circleY) {
      pupilX = 0.5 * eyeSize - 0.15625 * eyeSize * Math.cos(angle);
      pupilY = 0.5 * eyeSize - 0.15625 * eyeSize * Math.sin(angle);
    } else if (mouseX > circleX && mouseY < circleY) {
      pupilX = 0.5 * eyeSize + 0.15625 * eyeSize * Math.cos(angle);
      pupilY = 0.5 * eyeSize + 0.15625 * eyeSize * Math.sin(angle);
    } else if (mouseX < circleX && mouseY > circleY) {
      pupilX = 0.5 * eyeSize - 0.15625 * eyeSize * Math.cos(angle);
      pupilY = 0.5 * eyeSize - 0.15625 * eyeSize * Math.sin(angle);
    } else if (mouseX > circleX && mouseY > circleY) {
      pupilX = 0.5 * eyeSize + 0.15625 * eyeSize * Math.cos(angle);
      pupilY = 0.5 * eyeSize + 0.15625 * eyeSize * Math.sin(angle);
    }
    // this.setState({ pupilX, pupilY });
    return { pupilX, pupilY };
  };

  render() {
    return (
      <svg
        width={this.props.eyeSize}
        height={this.props.eyeSize}
        ref={this.refCallback}
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
          cx={0.09375 * this.props.eyeSize}
          cy={this.props.eyeSize / 2}
          r={0.09375 * this.props.eyeSize}
          strokeWidth={0.0625 * this.props.eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={0.90625 * this.props.eyeSize}
          cy={this.props.eyeSize / 2}
          r={0.09375 * this.props.eyeSize}
          strokeWidth={0.0625 * this.props.eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={this.props.eyeSize / 2}
          cy={0.90625 * this.props.eyeSize}
          r={0.09375 * this.props.eyeSize}
          strokeWidth={0.0625 * this.props.eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={this.props.eyeSize / 2}
          cy={0.09375 * this.props.eyeSize}
          r={0.09375 * this.props.eyeSize}
          strokeWidth={0.0625 * this.props.eyeSize}
          stroke="#aaaaaa"
        />
        <circle
          cx={this.props.eyeSize / 2}
          cy={this.props.eyeSize / 2}
          r={0.3125 * this.props.eyeSize}
          strokeWidth="1"
          stroke="#cccccc"
        />
        <circle
          className="GooglyEyes"
          cx={this.props.eyeSize / 2}
          cy={this.props.eyeSize / 2}
          r={0.3125 * this.props.eyeSize}
          fill="#ffffff"
          filter="url(#GooglyEyess)"
        />
        <circle
          className="GooglyEyes"
          cx={this.getPupilLoc().pupilX}
          cy={this.getPupilLoc().pupilY}
          r={0.15625 * this.props.eyeSize}
          fill="#222222"
        />
        {/* <circle className="GooglyEyes" cx={this.props.eyeSize/2} cy={this.props.eyeSize/2} r="26" fill="#222222" /> */}
      </svg>
    );
  }
}

export default GooglyEyes;
