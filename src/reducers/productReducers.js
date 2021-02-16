import {
  FETCH_PRODUCTS,
  FILTER_PRODUTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  CREATE_PRODUCT,
} from "../types";
// reducers is to initialize state of component, productItems.items is state shared with all store
export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUTS_BY_SIZE:
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };

    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };

    case CREATE_PRODUCT:
      return { newProduct: action.payload };
    default:
      return state;
  }
};
