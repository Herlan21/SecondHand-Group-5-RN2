import { combineReducers } from "redux";
import reducersAuth from "./reducersAuth";
import reducersProfile from "./reducersProfile";

const AllReducers = combineReducers({
    auth: reducersAuth, 
    profile: reducersProfile,
});

export default AllReducers;