import { GET_SELLER_PRODUCT_SUCCESS, GET_SELLER_PRODUCT_FAILED } from "../types";
import { API_GET_SELLER_PRODUCT } from "../../config";
import axios from "axios";

export const getSellerProductSuccess = payload => ({
    type: GET_SELLER_PRODUCT_SUCCESS,
    payload: payload
});

export const getSellerProductFailed = () => ({
    type: GET_SELLER_PRODUCT_FAILED,
});

export const getSellerProduct = (authToken) => async dispatch => {
    try {
        await axios.get(API_GET_SELLER_PRODUCT, {
            headers: {
                access_token: authToken,
            }
        })
            .then(value => {
                dispatch(getSellerProductSuccess(value.data));
                // console.log(value.data);
                console.log('Get Seller Product Success');
            });
    } catch (error) {
        dispatch(getSellerProductFailed());
        console.log(error);
    }
};