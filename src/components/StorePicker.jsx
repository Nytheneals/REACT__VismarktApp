import React, { Component } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
  // NEW REFs HOW TO GET DATA FROM A FORM
  myInput = React.createRef();

  // DECLARE A PROPERTY AND SET IT EQUAL TO AN ARROW FUNCTION, THIS WILL CARRY THE THIS AS THE COMPONENT INSTANCE
  goToStore = e => {
    // STOP FORM FROM SUBMITTING.
    e.preventDefault();
    // console.log(this.myInput);
    // GRABBING TEXT FROM STORE
    const storeName = this.myInput.current.value;
    // console.log(this.myInput.current.value);
    // TRANSISTIONING FROM '/' TO '/STORE/:STOREID' WE USE PUSHSTATE WITH IS MADE AVAILABLE TO USE BY REACT ROUTER THRU PROPS
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <div>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store --></button>
        </form>
      </div>
    );
  }
}

export default StorePicker;
