import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducers from '../reducers/reducersAuth'; 
import ProfileReducer  from '../reducers/reducersProfile';
import ProductReducer  from '../reducers/reducersHome';

const RootReducers = combineReducers({
    //reducers
    AuthReducers, ProfileReducer, ProductReducer
});

export default store = createStore(RootReducers, applyMiddleware(thunk));
