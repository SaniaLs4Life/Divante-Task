import { LOAD_PRODUCTS, ADD_TO_CART, LOAD_PRODUCT, REMOVE_PRODUCT } from '../constants';

const initialState = {
  products: [],
  product: {},
  cart: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.payload, ...state.cart]
      };
    case LOAD_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(e => e.id !== action.payload)
      };
    default:
      return state;
  }
};

export default products;
