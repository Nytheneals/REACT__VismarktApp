import React, { Component } from "react";
import PropTypes from "prop-types";
// import { getFunName } from "../helpers";

class AddFishForm extends Component {
  imageRef = React.createRef();
  formRef = React.createRef();
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();

  // PROP-TYPES
  static propTypes = {
    addFish: PropTypes.func
  };

  // CREATE FISH FUNCTION
  createFish = e => {
    e.preventDefault();
    console.log("Gonna make some fish 🐠");
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    //  THIS ADDS A FISH , METHOD COMES FROM MAIN COMPONENT, IT ADDS TO STATE..
    this.props.addFish(fish);

    //THIS RESETS THE FORM FIELDS TO EMPTY
    e.currentTarget.reset();
  };
  render() {
    return (
      <form
        ref={this.fishForm}
        className="fish-edit"
        onSubmit={this.createFish}
      >
        <input ref={this.nameRef} type="text" placeholder="Fish Name" />
        <input ref={this.priceRef} type="text" placeholder="Fish Price" />
        <select ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={this.descRef} placeholder="Fish Desc" />
        <input ref={this.imageRef} type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

// PROPTYPE VALIDATIONS

// AddFishForm.propTypes = {
//   addFish: React.PropTypes.func.isRequired
// };

export default AddFishForm;
