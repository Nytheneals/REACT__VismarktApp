import React, { Component } from "react";
import { formatPrice } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends Component {
  // RENDER INDIVIDUAL FISH ON ORDER
  renderOrder = key => {
    const fish = this.props.fishes[key]; //TAKES KEY OF OBJECT
    const count = this.props.order[key]; // CREATES COUNT
    const isAvailable = fish && fish.status === "available"; // IF WE TRULLY HAVE A FISH
    const transitionOptions = {
      classNames: "order",
      key,
      timeout: { enter: 500, exit: 500 }
    };

    // DO WE HAVE ANY FISH BEFORE IT RENDERS DB FROM FIREBASE.
    if (!fish) return null;

    //IF THERE'S NO FISH OR NO LONGER AVAILABLE
    if (!isAvailable) {
      return (
        <CSSTransition {...transitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : "fish"} is no longer available
          </li>
        </CSSTransition>
      );
    }

    //RETURNING FISH IF ITS AVAILABLE..
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{`${" "}` + count}</span>
              </CSSTransition>
            </TransitionGroup>
            lbs {fish.name + `${" "}`}
            {formatPrice(count * fish.price)}
            <button onClick={() => this.props.removeFromOrder(key)}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order); //GETTING KEYS OFF ORDERS
    // REDUCING THE TOTAL OF FISH ORDERED
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available"; //CHECK WHETHER THE FISH IS AVAILABLE.

      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
