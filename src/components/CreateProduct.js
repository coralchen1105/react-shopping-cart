import React, { Component } from "react";

export default class CreateProduct extends Component {
  render() {
    return (
      <div>
        <h2>create product here</h2>
        <div className="newProduct">
          <form>
            <ul className="form-row">
              <li className="form-group col-md-6">
                <label>Title</label>
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  required
                ></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
