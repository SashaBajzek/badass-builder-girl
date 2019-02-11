import React, { Component } from "react";
import "./GooglyEyes.scss";

class GooglyEyes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleX: null,
      circleY: null,
      pupilX: null,
      pupilY: null,
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

  getPupilLoc = () => {
    const { eyeSize, mouseX, mouseY } = this.props;
    const { circleX, circleY } = this.state;
    const pupilRadius = 0.15625 * eyeSize;
    let distanceToMouse = Math.sqrt(
      Math.pow(mouseX - circleX, 2) + Math.pow(mouseY - circleY, 2)
    );
    let angle = Math.atan((circleY - mouseY) / (circleX - mouseX));
    if (!circleX && !circleY) {
      // Center eyes on inital load
      this.setState({
        // This #12 is hardcoded!  See Shirt component newEyeSize divisor
        pupilX: window.innerWidth / 12 / 2,
        pupilY: window.innerWidth / 12 / 2
      });
    } else if (distanceToMouse <= pupilRadius) {
      this.setState({
        pupilX: mouseX - circleX + eyeSize / 2,
        pupilY: mouseY - circleY + eyeSize / 2
      });
    } else if (mouseX <= circleX) {
      this.setState({
        pupilX: 0.5 * eyeSize - pupilRadius * Math.cos(angle),
        pupilY: 0.5 * eyeSize - pupilRadius * Math.sin(angle)
      });
    } else if (mouseX > circleX) {
      this.setState({
        pupilX: 0.5 * eyeSize + pupilRadius * Math.cos(angle),
        pupilY: 0.5 * eyeSize + pupilRadius * Math.sin(angle)
      });
    }
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

  componentDidMount() {
    this.getPupilLoc();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.windowWidth !== nextProps.windowWidth ||
      this.props.windowHeight !== nextProps.windowHeight ||
      this.props.mouseX !== nextProps.mouseX ||
      this.props.mouseY !== nextProps.mouseY ||
      this.props.eyeSize !== nextProps.eyeSize
    ) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.windowWidth !== prevProps.windowWidth ||
      this.props.windowHeight !== prevProps.windowHeight ||
      this.props.eyeSize !== prevProps.eyeSize
    ) {
      this.checkCircleLocation();
      this.getPupilLoc();
    } else if (
      this.props.mouseX !== prevProps.mouseX ||
      this.props.mouseY !== prevProps.mouseY
    ) {
      this.getPupilLoc();
    }
  }

  getLeft = () => {
    const { eyeSize } = this.props;
    return (
      <circle
        cx={0.09375 * eyeSize}
        cy={eyeSize / 2}
        r={0.09375 * eyeSize}
        strokeWidth={0.0625 * eyeSize}
        stroke="#aaaaaa"
      />
    );
  };

  getRight = () => {
    const { eyeSize } = this.props;
    return (
      <circle
        cx={0.90625 * eyeSize}
        cy={eyeSize / 2}
        r={0.09375 * eyeSize}
        strokeWidth={0.0625 * eyeSize}
        stroke="#aaaaaa"
      />
    );
  };

  getBottom = () => {
    const { eyeSize } = this.props;
    return (
      <circle
        cx={eyeSize / 2}
        cy={0.90625 * eyeSize}
        r={0.09375 * eyeSize}
        strokeWidth={0.0625 * eyeSize}
        stroke="#aaaaaa"
      />
    );
  };

  getTop = () => {
    const { eyeSize } = this.props;
    return (
      <circle
        cx={eyeSize / 2}
        cy={0.09375 * eyeSize}
        r={0.09375 * eyeSize}
        strokeWidth={0.0625 * eyeSize}
        stroke="#aaaaaa"
      />
    );
  };

  getRings = position => {
    let rings = [];
    if (position.includes("top")) {
      rings.push(this.getTop());
    }
    if (position.includes("bottom")) {
      rings.push(this.getBottom());
    }
    if (position.includes("left")) {
      rings.push(this.getLeft());
    }
    if (position.includes("right")) {
      rings.push(this.getRight());
    }
    if (position.includes("all")) {
      rings.push(
        this.getLeft(),
        this.getBottom(),
        this.getTop(),
        this.getRight()
      );
    }
    return rings;
  };

  render() {
    const { eyeSize, position } = this.props;
    const { pupilX, pupilY } = this.state;
    console.log("GooglyEye render");
    return (
      <svg
        width={eyeSize}
        height={eyeSize}
        ref={this.refCallback}
        className="GooglyEyes"
      >
        <defs>
          <filter id="GooglyEyes">
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
        {this.getRings(position)}
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
          filter="url(#GooglyEyes)"
        />
        <circle cx={pupilX} cy={pupilY} r={0.15625 * eyeSize} fill="#222222" />
      </svg>
    );
  }
}

export default GooglyEyes;
