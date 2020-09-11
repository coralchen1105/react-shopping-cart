import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../actions/productActions";

class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      description: "",
      availableSize: [],
      price: "",
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckbox = (e) => {
    let avs = this.state.availableSize;
    if (e.target.checked) {
      avs.push(e.target.value);
      this.setState({ availableSize: avs });
    }
  };

  //   createProduct = (e) => {
  //     e.preventDefault();
  //     const newProduct = {};
  //   };
  render() {
    return (
      <div>
        <h2>create product here</h2>
        <div className="newProduct">
          <form>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Title</label>
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  required
                  onChange={this.handleInput}
                ></input>
              </div>
              <div className="form-group col-md-3">
                <label>Price: </label>
                <input
                  className="form-control"
                  name="price"
                  type="text"
                  required
                  onChange={this.handleInput}
                ></input>
              </div>
              <div className="form-group col-md-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  onChange={this.handleInput}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input
                  type="file"
                  class="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="inlineCheckbox1">
                  Avaiable Size:
                </label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="XS"
                  value="XS"
                />
                <label class="form-check-label" for="XS">
                  XS
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="S"
                  value="S"
                />
                <label class="form-check-label" for="S">
                  S
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="M"
                  value="M"
                />
                <label class="form-check-label" for="M">
                  M
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="L"
                  value="L"
                />
                <label class="form-check-label" for="L">
                  L
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="XL"
                  value="XL"
                />
                <label class="form-check-label" for="XL">
                  XL
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="XXL"
                  value="XXL"
                />
                <label class="form-check-label" for="XXL">
                  XL
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Add new product
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    newProduct: state.productItems.newProduct,
  }),
  { createProduct }
)(CreateProduct);

// TODO::
// get checkbox value:  to set isChecked state to false, and set input tag checked element as this.state.isChecked
