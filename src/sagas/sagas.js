import { takeLatest, put, call, all } from 'redux-saga/effects';

import {
  LOAD_PRODUCTS_LOADING,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ALL
} from '../store/constants';
import { loadProducts } from '../store/actions';
import { ProductServices } from '../services/ProductServices';

function* getProductsAsync() {
  try {
    yield put({ type: LOAD_PRODUCTS_LOADING });
    const data = yield call(ProductServices.getProducts);
    yield put(loadProducts(data));
    yield put({ type: LOAD_PRODUCTS_SUCCESS });
  } catch (err) {
    console.log('Error', err);
  }
}

function* watchGetProducts() {
  yield takeLatest(LOAD_PRODUCTS_ALL, getProductsAsync);
}

export default function* rootSaga() {
  yield all([getProductsAsync(), watchGetProducts()]);
}
