import axios from "axios";
export const updateSignUpRequest = userData => {
  return dispatch => {
    return axios.post("/api/users/", userData);
  };
};
