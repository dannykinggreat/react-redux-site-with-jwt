import flashMessages from "./reducers/flashMessages";
import authReducer from "./reducers/authReducer";
import { combineReducers } from "redux";

export default combineReducers({
  flashMessages,
  authReducer
});
