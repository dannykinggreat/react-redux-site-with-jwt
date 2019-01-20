import { ADD_FLASH_MESSAGE } from "../actions/actionTypes";
import { DELETE_FLASH_MESSAGE } from "../actions/actionTypes";
const flashMessageReducer = (
  //state = [{ id: "1", type: "success", text: "Dummy" }],
  state = [],
  action
) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      console.log("inside flassh reducer");
      return [...state, action.message];
    case DELETE_FLASH_MESSAGE:
      console.log("inside flassh delete");
      return state.filter(message => {
        message.id !== action.id;
      });
    default:
      return state;
  }
};

export default flashMessageReducer;
