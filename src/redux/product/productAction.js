import axios from 'axios'
import { applyMiddleware } from 'redux';
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE
} from './productType'

export const fetchProductRequest = () => {
  return{
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (item) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: item,
  };
};

export const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductRequest);
    axios
      .get('https://fakestoreapi.com/products?limit=2')
      .then(response => {
        const products = response.data;
        dispatch(fetchProductSuccess(products));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchProductFailure(errorMsg));
      });
  };
};