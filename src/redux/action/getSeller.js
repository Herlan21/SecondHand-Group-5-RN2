import { GET_BANNER_SUCCESS, GET_BANNER_FAILED, GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILED } from "../types";
import { API_GET_BANNER, API_GET_CATEGORY } from "../../config";
import axios from "axios";

export const getBannerSuccess = payload => ({
  type: GET_BANNER_SUCCESS,
  payload: payload
});

export const getBannerFailed = () => ({
  type: GET_BANNER_FAILED,
});

export const getCategoriesSuccess = payload => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: payload
});

export const getCategoriesFailed = () => ({
  type: GET_CATEGORIES_FAILED,
});

export const getBanner = () => async dispatch => {
  try {
    await axios.get(API_GET_BANNER)
      .then(value => {
        dispatch(getBannerSuccess(value.data));
        console.log('Get banner Success');
      });
  } catch (error) {
    dispatch(getBannerFailed());
    console.log(error);
  }
};

export const getCategories = () => async dispatch => {
  try {
    await axios.get(API_GET_CATEGORY)
      .then(value => {
        dispatch(getCategoriesSuccess(value.data));
        console.log('Get kategori Success');
      });
  } catch (error) {
    dispatch(getCategoriesFailed());
    console.log(error);
  }
};