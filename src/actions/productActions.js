import {
  FETCH_PRODUCTS,
  FILTER_PRODUTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  CREATE_PRODUCT,
} from "../types";

// use double arraow function that call without object binding
// action function dispatch to store
// use redux thunk to handle async function
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const createProduct = (product) => (dispatch) => {
  fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: CREATE_PRODUCT, payload: data });
    });
};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  // copy the list to sortedProducts
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    // sort all products in sortedProducts list with condition _id is bigger
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  // dispatch action to reducer
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
