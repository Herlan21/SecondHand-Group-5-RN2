import { GET_PRODUCT_FAILED, GET_PRODUCT_SUCCESS, GET_DETAIL_SUCCESS, GET_DETAIL_FAILED } from "../types";
import {  API_GET_PRODUCT } from "../../config";
import axios from 'axios';


export const ProductData = payload => ({
  type: GET_PRODUCT_SUCCESS,
  payload: payload
});

export const ProductDataFailed = () => ({
  type: GET_PRODUCT_FAILED,
});

export const DetailDataSuccess = (payload) => ({
  type: GET_DETAIL_SUCCESS,
  payload: payload
});

export const DetailDataFailed = () => ({
  type: GET_DETAIL_FAILED,
});


export const productData = (props) => async dispatch => {
  try {
    await axios.get(`${API_GET_PRODUCT}?status=${props?.status}&category_id=${props?.category_id}&search=${props?.search}&page=${props?.page}&per_page=10`)
    
      .then(value => {
        dispatch(ProductData(value.data));
        console.log('Get product Success');
      });
  } catch (error) {
    dispatch(ProductDataFailed());
    console.log(error);
  }
};

export const productDetail = (id) => async dispatch => {
  try {
    await axios.get(`${API_GET_PRODUCT}/${id}`)
      .then(value => {
        dispatch(DetailDataSuccess(value.data));
        console.log('Get Detail Success');
      });
  } catch (error) {
    dispatch(DetailDataFailed());
    console.log(error);
  }
};

