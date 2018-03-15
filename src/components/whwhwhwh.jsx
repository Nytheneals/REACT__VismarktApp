import React, { Component } from "react";

class StorePicker extends Component {
  render() {
    return (
      <div>
        <form className="store-selector">
          <h2>Please Enter Store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store --></button>
        </form>
      </div>
    );
  }
}

export default StorePicker;