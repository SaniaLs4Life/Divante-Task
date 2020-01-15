import { LOAD_PRODUCTS, ADD_TO_CART, LOAD_PRODUCT, REMOVE_PRODUCT } from '../constants';

const loadProducts = products => ({
  type: LOAD_PRODUCTS,
  payload: products
});

const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
});

const loadProduct = product => ({
  type: LOAD_PRODUCT,
  payload: product
});

const removeProduct = id => ({
  type: REMOVE_PRODUCT,
  payload: id
});

export { loadProducts, addToCart, loadProduct, removeProduct };
