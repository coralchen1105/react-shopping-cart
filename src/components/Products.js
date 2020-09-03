import React, { Component } from "react";
import formatCurrency from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

// the initial state of the app: {}
// When rendering react, got the props of this component: products, fetchProducts()

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div>
        {!this.props.products ? (
          <div>Loading...</div>
        ) : (
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product._id}>
                <div className="product">
                  <a href={"#" + product._id}>
                    <img src={product.image} alt={product.title}></img>
                    <p>{product.title}</p>
                  </a>
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

// first param is return of mapStateToProps function, create products props in this products component
// second param is return of mapDispatchToProps which dispatch action to component props
export default connect(
  (state) => ({ products: state.productItems.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Products);
