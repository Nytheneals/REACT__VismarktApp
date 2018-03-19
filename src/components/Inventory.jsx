import React, { Component } from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
class Inventory extends Component {
  render() {
    //********************INVENTORY COMPONENT********************//
    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => {
          return (
            <EditFishForm
              key={key}
              index={key}
              fish={this.props.fishes[key]}
              updateFish={this.props.updateFish}
              deleteFish={this.props.deleteFish}
            />
          );
        })}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamplesFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
