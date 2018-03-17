import React, { Component } from "react";
// COMPONENT IMPORT
import Order from "./Order";
import Header from "./Header";
import Inventory from "./Inventory";
import Fish from "./Fish";
import base from "../base";
import sampleFishes from "../sample-fishes";

class App extends Component {
  state = {
    fishes: {},
    order: {}
  };
  //***********LIFE CYCLE METHOD***********//
  //***********PERSISTING STATE WITH  FIREBASE***********//
  componentDidMount() {
    // SYNC WITH THE NAME OF THE STORE.
    // THIS IS PROPS OFF THE APP COMPONENT
    const { params } = this.props.match;
    // THIS .REF IS REFERENCEING THE PARTICULAR DB
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  // TO PREVENT MEMORY LEAK, WE HAVE TO UNMOUNT IT
  componentWillUnMount() {
    base.removeBinding(this.ref);
  }

  //*********** ************TO ADD FISH***********************//
  addFish = fish => {
    // MAKE A COPY OF THE STATE, AVOID MUTATION (PERFORMACE ISSUES, AND THINGS UPDATING OUT OF ORDER)
    const fishes = { ...this.state.fishes };
    // ADD A NEW FISH (WE ARE USING DATE.NOW()TO CREATE UNIQUE KEY = FISH)
    fishes[`fish${Date.now()}`] = fish;
    // UPDATING THE FISHES.
    this.setState({ fishes: fishes });
  };

  //*******************TO LOAD SAMPLE FISH*******************//
  loadSamplesFishes = () => {
    this.setState({
      fishes: sampleFishes
    });
  };

  //**********************ADD TO ORDER**********************//
  addToOrder = key => {
    //MAKE A COPY OF THE STATE & UPDATE OUR STATE
    const order = { ...this.state.order };
    //  UPDATE OR ADD THE NEW NUMBER OF FISH ORDERED
    order[key] = order[key] + 1 || 1; //THIS WILL EITHER INCREMENT OR CREATE A NEW FISH WHENEVER WE ADD TO ORDER.
    this.setState({ order });
  };

  //********************MAIN COMPONENT********************//
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {/* CHANGING AN OBJECT INTO AN ARRAY AND USING THE KEY AS A UNIQUE KEY, REFER TO SAMPLE DATA FOR FORMAT */}
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSamplesFishes={this.loadSamplesFishes}
          addToOrder={this.addToOrder}
        />
      </div>
    );
  }
}

export default App;
