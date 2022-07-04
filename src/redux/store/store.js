import { createStore, combineReducers, applyMiddleware } from 'redux';
import AuthReducers from '../reducers/reducersAuth';
import thunk from 'redux-thunk';

const RootReducers = combineReducers({
    //reducers
    AuthReducers,
});

export default store = createStore(RootReducers, applyMiddleware(thunk));
