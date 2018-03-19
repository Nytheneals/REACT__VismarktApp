import React, { Component } from "react";

class EditFishForm extends Component {
  handleChange = e => {
    const { fish, index, updateFish } = this.props;
    console.log(e.currentTarget.value);

    // COPY OF STATE
    const updatedFish = {
      ...fish,
      [e.currentTarget.name]: e.currentTarget.value
    };

    updateFish(index, updatedFish);

    console.log(updatedFish);
  };

  render() {
    //********************EDIT FISH COMPONENT********************//
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input
          value={name}
          onChange={this.handleChange}
          name="name"
          type="text"
          placeholder="Fish Name"
        />
        <input
          value={price}
          onChange={this.handleChange}
          name="price"
          type="text"
          placeholder="Fish Price"
        />
        <select
          value={status}
          onChange={this.handleChange}
          name="status"
          ref={this.statusRef}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          value={desc}
          onChange={this.handleChange}
          name="desc"
          placeholder="Fish Desc"
        />
        <input
          name="image"
          type="text"
          value={image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
