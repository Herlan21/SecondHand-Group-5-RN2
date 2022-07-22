import { GET_SELLER_PRODUCT_SUCCESS, GET_SELLER_PRODUCT_FAILED } from '../types';

const initialState = {
    sellerProduct: [],
};

const SellerProductReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_SELLER_PRODUCT_SUCCESS:
            return {
                ...state,
                sellerProduct: action.payload,
            };
        case GET_SELLER_PRODUCT_FAILED:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default SellerProductReducer;