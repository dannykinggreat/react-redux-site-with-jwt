import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {}
};
const authReducer = (
  //state = [{ id: "1", type: "success", text: "Dummy" }],
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !(
          Object.keys(action.user).length === 0 &&
          action.user.constructor === Object
        ),
        user: action.user
      };
    default:
      return state;
  }
};

export default authReducer;
