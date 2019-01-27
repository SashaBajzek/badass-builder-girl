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
    const { mouseX, mouseY } = this.props;
    let pupilX = this.props.eyeSize / 2;
    let pupilY = this.props.eyeSize / 2;
    return { pupilX, pupilY };
  };

  getPupilX = () => {
    console.log("circleX", this.state.circleX);
    let pupilX = this.props.eyeSize / 2;
    if (this.props.mouseX > this.state.circleX + 0.15625 * this.props.eyeSize) {
      pupilX = this.props.eyeSize / 2 + 0.15625 * this.props.eyeSize;
    } else if (
      this.props.mouseX <
      this.state.circleX - 0.15625 * this.props.eyeSize
    ) {
      pupilX = this.props.eyeSize / 2 - 0.15625 * this.props.eyeSize;
    } else {
      pupilX = this.props.mouseX - this.state.circleX + this.props.eyeSize / 2;
    }
    console.log("pupilX", pupilX);
    return pupilX;
  };

  getPupilY = () => {
    console.log("circleX", this.state.circleX);
    let pupilY = this.props.eyeSize / 2;
    if (this.props.mouseY > this.state.circleY + 0.15625 * this.props.eyeSize) {
      pupilY = this.props.eyeSize / 2 + 0.15625 * this.props.eyeSize;
    } else if (
      this.props.mouseY <
      this.state.circleY - 0.15625 * this.props.eyeSize
    ) {
      pupilY = this.props.eyeSize / 2 - 0.15625 * this.props.eyeSize;
    } else {
      pupilY = this.props.mouseY - this.state.circleY + this.props.eyeSize / 2;
    }
    console.log("pupilY", pupilY);
    return pupilY;
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
          cx={this.getPupilX()}
          cy={this.getPupilY()}
          r={0.15625 * this.props.eyeSize}
          fill="#222222"
        />
        {/* <circle className="GooglyEyes" cx={this.props.eyeSize/2} cy={this.props.eyeSize/2} r="26" fill="#222222" /> */}
      </svg>
    );
  }
}

export default GooglyEyes;
