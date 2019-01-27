import axios from "axios";
export const updateSignUpRequest = userData => {
  return dispatch => {
    return axios.post("/api/users/", userData);
  };
};

export const checkUserExists = identifier => {
  return dispatch => {
    console.log("inside checkuserExist");
    return axios.get(`/api/users/${identifier}`);
  };
};
