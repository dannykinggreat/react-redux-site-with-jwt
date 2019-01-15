import axios from "axios";
export const updateSignUpRequest = userData => {
  console.log("inside action, before dispatch");
  return dispatch => {
    console.log("inside dispatch", userData);
    return axios.post("/ap/users", userData);
  };
};
