import React, { Component, Fragment } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Inventory />
        <Order />
        <Header />
      </Fragment>
    );
  }
}

export default App;
