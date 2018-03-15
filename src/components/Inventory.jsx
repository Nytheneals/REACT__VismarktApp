import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
class Inventory extends Component {
  render() {
    //********************INVENTORY COMPONENT********************//
    return (
      <div>
        <h2>Inventory</h2>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamplesFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
