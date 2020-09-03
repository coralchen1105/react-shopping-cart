import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });

  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }

  dispatch({
    type: ADD_TO_CART,
    //{cartItems} means assign cartItems list to variable name cartItems, equal to cartItems : cartItems (list)
    payload: { cartItems },
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  // remove items from cartItems in state, and then change state in cureent
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x._id !== product._id);

  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
