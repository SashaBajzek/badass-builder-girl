import React, { Component } from "react";
import "./GoogleEyes.scss";

class GoogleEyes extends Component {
  constructor(props) {
    super(props);
    this.state = { size: {}, pupilX: 80, pupilY: 80 };
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
    let pupilX = 80;
    let pupilY = 80;
    return { pupilX, pupilY };
  };

  getPupilX = () => {
    console.log("circleX", this.state.circleX);
    let pupilX = 80;
    if (this.props.mouseX > this.state.circleX + 25) {
      pupilX = 80 + 25;
    } else if (this.props.mouseX < this.state.circleX - 25) {
      pupilX = 80 - 25;
    } else {
      pupilX = this.props.mouseX - this.state.circleX + 80;
    }
    console.log("pupilX", pupilX);
    return pupilX;
  };

  getPupilY = () => {
    console.log("circleX", this.state.circleX);
    let pupilY = 80;
    if (this.props.mouseY > this.state.circleY + 25) {
      pupilY = 80 + 25;
    } else if (this.props.mouseY < this.state.circleY - 25) {
      pupilY = 80 - 25;
    } else {
      pupilY = this.props.mouseY - this.state.circleY + 80;
    }
    console.log("pupilY", pupilY);
    return pupilY;
  };

  render() {
    return (
      <svg width="160px" height="160px" ref={this.refCallback}>
        <defs>
          <filter id="GoogleEyess">
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
        <circle cx="15" cy="80" r="15" strokeWidth="10" stroke="#aaaaaa" />
        <circle cx="145" cy="80" r="15" strokeWidth="10" stroke="#aaaaaa" />
        <circle cx="80" cy="145" r="15" strokeWidth="10" stroke="#aaaaaa" />
        <circle cx="80" cy="15" r="15" strokeWidth="10" stroke="#aaaaaa" />
        <circle cx="79" cy="79" r="48" strokeWidth="1" stroke="#cccccc" />
        <circle
          className="GoogleEyes"
          cx="80"
          cy="80"
          r="50"
          fill="#ffffff"
          filter="url(#GoogleEyess)"
        />
        <circle
          className="GoogleEyes"
          cx={this.getPupilX()}
          cy={this.getPupilY()}
          r="26"
          fill="#222222"
        />
        {/* <circle className="GoogleEyes" cx="80" cy="80" r="26" fill="#222222" /> */}
      </svg>
    );
  }
}

export default GoogleEyes;
