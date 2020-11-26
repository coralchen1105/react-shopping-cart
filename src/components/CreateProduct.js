import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../actions/productActions";
import Checkbox from "../components/Checkbox";
import axios from "axios";

const OPTIONS = ["XS", "S", "M", "L", "XL", "XXL"];
class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      file: "",
      imagePreviewUrl: "",
      image:"",
      description: "",
      price: "",
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false,
        }),
        {}
      ),
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  selectAllCheckboxes = (isSelected) => {
    Object.keys(this.state.checkboxes).forEach((checkbox) => {
      // BONUS: Can you explain why we pass updater function to setState instead of an object?
      this.setState((prevState) => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected,
        },
      }));
    });
  };

  handleCheckboxChange = (changeEvent) => {
    // changeEvent.target = input name tag value
    const { name } = changeEvent.target;

    this.setState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };
  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let image = e.target.files[0].name;

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        image: "/images/" + image
      });
    };

    reader.readAsDataURL(file);
  }

  createProduct = (e) => {
    e.preventDefault();

    // const data = new FormData();
    // data.append("file", this.state.file);
    // axios
    //   .post("/api/images", data, {
    //     // receive two parameter endpoint url ,form data
    //   })
    //   .then((res) => {
    //     // then print response status
    //     console.log(res.statusText);
    //   });
    // console.log("handle uploading-", this.state.file);

    const availableSizes = Object.keys(this.state.checkboxes).filter(
      (checkbox) => this.state.checkboxes[checkbox]
    );

    console.log(availableSizes);

    const newProduct = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description,
      price: Number(this.state.price),
      availableSizes: availableSizes,
    };

    this.props.createProduct(newProduct);
  };
  render() {
    
    return (
      <div>
        <h2>create product here</h2>
        <div className="newProduct">
          <form onSubmit={this.createProduct}>
            <div className="form-row">
              <div className="form-group">
                <label>Title</label>
                <input
                  className="form-control"
                  name="title"
                  type="text"
                  required
                  onChange={this.handleInput}
                ></input>
              </div>
              <div className="form-group">
                <label>Price: </label>
                <input
                  className="form-control"
                  name="price"
                  type="text"
                  required
                  onChange={this.handleInput}
                ></input>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  name="description"
                  onChange={this.handleInput}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input
                  type="file"
                  className="form-control-file"
                  name="file"
                  onChange={this._handleImageChange}
                  id="exampleFormControlFile1"
                />
                 {/* <button
                  className="submitButton"
                  type="submit"
                  onClick={(e) => this._handleSubmit(e)}
                 >
                  Upload Image
                </button> */}
              </div>
            </div>
            {this.createCheckboxes()}
            <div className="form-group">
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.selectAll}
              >
                Select All
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mr-2"
                onClick={this.deselectAll}
              >
                Deselect All
              </button>
            </div>
            <button type="submit" className="btn btn-primary">
                Save
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
