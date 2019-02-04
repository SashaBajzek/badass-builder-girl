import React from "react";

function withMouseTouchLocation(Component, propName = "mouseLocation") {
  return class WithMouseTouchLocation extends React.Component {
    state = {
      mouseX: 0,
      mouseY: 0,
      windowHeight: 0,
      windowWidth: 0,
      zeroX: 0,
      zeroY: 0
    };

    mouseMove = event =>
      this.setState({
        mouseX: event.screenX,
        mouseY: event.screenY
      });

    touchMove = event =>
      this.setState({
        mouseX: event.screenX,
        mouseY: event.screenY
      });

    refCallback = element => {
      if (element) {
        let size = element.getBoundingClientRect();
        let zeroX = size.left;
        let zeroY = size.top;
        this.setState({ zeroX, zeroY });
      }
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
        originLocation: { zeroX: this.state.zeroX, zeroY: this.state.zeroY },
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
// maybe make this only work when you are mouseentered, otherwise when they leave it wont work
// also, make one for window resize!
