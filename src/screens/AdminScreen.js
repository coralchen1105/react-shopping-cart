import React, { Component } from "react";
import Orders from "../components/orders";
import CreateProduct from "../components/CreateProduct";
export default class AdminScreen extends Component {
  render() {
    return (
      <div>
        <h1>Orders</h1>
        <Orders />
        <CreateProduct />
      </div>
    );
  }
}
