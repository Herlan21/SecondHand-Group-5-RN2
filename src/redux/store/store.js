import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducers from '../reducers/reducersAuth';
import ProfileReducer from '../reducers/reducersProfile';
import ProductReducer from '../reducers/reducersHome';
import SellerProductReducer from '../reducers/reducersSeller';
import NotificationReducer from '../reducers/reducersNotification';
import DetailReducer from '../reducers/reducersProduct';
import ReducersBid from '../reducers/reducersBid';

const RootReducers = combineReducers({
    //reducers
    AuthReducers, ProfileReducer, ProductReducer, SellerProductReducer, NotificationReducer, DetailReducer, ReducersBid
});

export default store = createStore(RootReducers, applyMiddleware(thunk));
