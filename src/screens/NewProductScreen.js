import React, { Component } from "react";
import CreateProduct from "../components/CreateProduct";

export default class NewProductScreen extends Component {
  render() {
    return (
      <div>
        <h1>New Product</h1>
        <CreateProduct />
      </div>
    );
  }
}
