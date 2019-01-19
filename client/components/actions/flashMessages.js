import { ADD_FLASH_MESSAGE } from "../../actions/actionTypes";
const addFlashMessage = message => {
  console.log("inside action flash");
  return { type: ADD_FLASH_MESSAGE, message };
};

export { addFlashMessage };
