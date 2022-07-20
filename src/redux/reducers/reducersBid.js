import { POST_BID_SUCCESS, POST_BID_FAILED, GET_BID_SUCCESS, GET_BID_FAILED } from '../types';

const initialState = {
    allBid: []
};

const ReducersBid = (state = initialState, action = {}) => {
    switch (action.type) {
        case POST_BID_SUCCESS:
            return {
                ...state,
            };

        case POST_BID_FAILED:
            return {
                ...state,
            };

        case GET_BID_SUCCESS:
            return {
                ...state,
                allBid: action.payload
            };

        case GET_BID_FAILED:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default ReducersBid;