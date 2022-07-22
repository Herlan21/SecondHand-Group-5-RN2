import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducers from '../reducers/reducersAuth';
import ProfileReducer from '../reducers/reducersProfile';
import ProductReducer from '../reducers/reducersHome';
import SellerProductReducer from '../reducers/reducersSeller';
import NotificationReducer from '../reducers/reducersNotification';

const RootReducers = combineReducers({
    //reducers
    AuthReducers, ProfileReducer, ProductReducer, SellerProductReducer, NotificationReducer
});

export default store = createStore(RootReducers, applyMiddleware(thunk));
