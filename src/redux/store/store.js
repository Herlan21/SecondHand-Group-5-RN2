import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducers from '../reducers/reducersAuth'; 
import ProfileReducer  from '../reducers/reducersProfile';

const RootReducers = combineReducers({
    //reducers
    AuthReducers, ProfileReducer
});

export default store = createStore(RootReducers, applyMiddleware(thunk));
