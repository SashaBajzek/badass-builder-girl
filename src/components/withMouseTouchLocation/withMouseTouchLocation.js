import React from "react";

function withMouseTouchLocation(Component, propName = "mouseLocation") {
  return class WithMouseTouchLocation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mouseX: 0,
        mouseY: 0,
        windowHeight: 0,
        windowWidth: 0
      };
      this.element = null;
    }

    mouseMove = event => {
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY
      });
    };

    touchMove = event =>
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY
      });

    refCallback = element => {
      this.element = element;
    };

    updateDimensions = () => {
      this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      });
    };

    componentWillMount() {
      this.updateDimensions();
    }

    componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
      const props = {
        [propName]: { mouseX: this.state.mouseX, mouseY: this.state.mouseY },
        windowDimensions: {
          windowHeight: this.state.windowHeight,
          windowWidth: this.state.windowWidth
        },
        ...this.props
      };

      return (
        <div
          onMouseMove={this.mouseMove}
          onTouchMove={this.touchMove}
          ref={this.refCallback}
        >
          <Component {...props} />
        </div>
      );
    }
  };
}

export default withMouseTouchLocation;
