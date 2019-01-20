import { ADD_FLASH_MESSAGE } from "../../actions/actionTypes";
import { DELETE_FLASH_MESSAGE } from "../../actions/actionTypes";
const addFlashMessage = message => {
  console.log("inside action flash");
  return { type: ADD_FLASH_MESSAGE, message };
};

const deleteFlashMessage = id => {
  console.log("inside delete flash");
  return { type: DELETE_FLASH_MESSAGE, id };
};

export { addFlashMessage, deleteFlashMessage };
