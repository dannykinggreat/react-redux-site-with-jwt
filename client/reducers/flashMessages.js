import { ADD_FLASH_MESSAGE } from "../actions/actionTypes";
const flashMessageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      console.log("inside flassh reducer");
      return [...state, action.message];
    default:
      return state;
  }
};

export default flashMessageReducer;
