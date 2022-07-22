import { GET_BID_SUCCESS, GET_BID_FAILED, POST_BID_SUCCESS, POST_BID_FAILED } from "../types";
import { API_BID_PRODUCT } from "../../config";
import axios from 'axios';

export const BidSuccess = () => ({
    type: POST_BID_SUCCESS,
});

export const BidFailed = () => ({
    type: POST_BID_FAILED,
});

export const GetBidSuccess = (payload) => ({
    type: GET_BID_SUCCESS,
    payload: payload
});

export const GetBidFailed = () => ({
    type: GET_BID_FAILED,
});

export const bidProduk = (bidPrice, token) => async dispatch => {
    try {
        await axios.post(API_BID_PRODUCT, bidPrice, {
            headers: {
                access_token: token,
            }
        })
            .then(value => {
                dispatch(BidSuccess());
                alert('Bid produk Success');
            });
    } catch (error) {
        dispatch(BidFailed());
        alert(error.response.data.message);
    }
};

export const GetBidProduct = (token) => async dispatch => {
    try {
        await axios.get(API_BID_PRODUCT, {
            headers: {
                access_token: token,
            }
        })
            .then(value => {
                dispatch(GetBidSuccess(value.data));
                console.log('get bid Success');
            });
            
    } catch (error) {
        dispatch(GetBidFailed());
        alert(error.response.data.message);
    }
};