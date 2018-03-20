import React, { Component } from "react";
import PropTypes from "prop-types";

// HELPER
import { formatPrice } from "../helpers";
// this.prop.details
class Fish extends Component {
  // PROP-TYPES
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };
  render() {
    const { index } = this.props;
    const { image, name, price, desc, status } = this.props.details;
    //BUTTON CHECKER / TENARY OPERATOR
    const isAvailable = status === "available"; //CHECKS IF ITS AVAILABLE
    const buttonText = isAvailable ? "Add To Order" : "Sold Out"; //CHECKS IF AVAILABLE IS TRUE, IF NOT THEN SOLD OUT.

    return (
      <li className="menu-fish">
        <img src={image} alt={image} />
        <h3 className="fish-name">
          {name}
          <span className="price"> {formatPrice(price)}</span>
        </h3>
        <p> {desc}</p>
        <button
          onClick={() => this.props.addToOrder(index)}
          disabled={!isAvailable}
        >
          {buttonText}
        </button>
      </li>
    );
  }
}

// PROPTYPE VALIDATIONS

export default Fish;
