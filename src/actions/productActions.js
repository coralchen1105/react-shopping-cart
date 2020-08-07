import { FETCH_PRODUCTS } from "../types";

// use double arraow function that call without object binding
// action function dispatch to store
// use redux thunk to handle async function
export const fetchProducts = () => async (dispatch) => {
  const res = await fetch("/api/products");
  dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data,
  });
};
