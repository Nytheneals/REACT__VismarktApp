import React, { Component } from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // MAKE A COPY OF THE STATE, AVOID MUTATION (PERFORMACE ISSUES, AND THINGS UPDATING OUT OF ORDER)
    const fishes = { ...this.state.fishes };
    // ADD A NEW FISH (WE ARE USING DATE.NOW()TO CREATE UNIQUE KEY = FISH)
    fishes[`fish${Date.now()}`] = fish;
    // UPDATING THE FISHES.
    this.setState({ fishes: fishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
