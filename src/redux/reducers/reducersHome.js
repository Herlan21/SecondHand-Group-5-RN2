import {
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED
} from '../types';

const initialState = {
  dataProduct: [],
  dataCategories: [],
  dataBanner: []
};

const ProductReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        dataProduct: action.payload,
      };

    case GET_PRODUCT_FAILED:
      return {
        ...state,
      };

      case GET_BANNER_SUCCESS:
      return {
        ...state,
        dataBanner: action.payload,
      };

      case GET_BANNER_FAILED:
      return {
        ...state,
      };

      case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        dataCategories: action.payload,
      };

      case GET_CATEGORIES_FAILED:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default ProductReducer;