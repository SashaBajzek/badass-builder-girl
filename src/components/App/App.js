import React, { Component } from "react";
import Shirt from "../Shirt/Shirt";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>To Simone Giertz: Thank you for the inspiration</h1>
        </header>
        <img
          className="App__img"
          alt="Simone with googly eye shirt"
          srcSet="https://scontent-sjc3-1.cdninstagram.com/vp/61dcfe4155930824d0a09f3c9d2b080a/5CFB6BEC/t51.2885-15/sh0.08/e35/s640x640/32070041_226264824808445_4867649035428691968_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com
        640w,https://scontent-sjc3-1.cdninstagram.com/vp/14d6b42ea00ef0911a19ee826e161f4d/5CE702EC/t51.2885-15/sh0.08/e35/s750x750/32070041_226264824808445_4867649035428691968_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com
        750w,https://scontent-sjc3-1.cdninstagram.com/vp/954192c0d3278a9007d42c112e94fb2b/5CF36B09/t51.2885-15/e35/32070041_226264824808445_4867649035428691968_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com
        1080w"
        />
        <Shirt />
      </div>
    );
  }
}

export default App;
