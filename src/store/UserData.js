import { createStore, combineReducers } from "redux";
import userReducer from "../reducer/userReducer";
import covidReducer from "../reducer/covidReducer";

const rootReducer = combineReducers({
  userReducer,
  covidReducer,
});

const UserData = createStore(rootReducer);
export default UserData;
