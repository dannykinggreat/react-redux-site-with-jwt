import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore((state = {}) => state, applyMiddleware(thunk));

export default store;
