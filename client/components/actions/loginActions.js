import axios from "axios";
import setAuthorizationToken from "../../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";
import { SET_CURRENT_USER } from "../../actions/actionTypes";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

export const login = data => {
  return dispatch => {
    return axios.post("/api/auth", data).then(res => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      console.log("Decoded token is ", jwt.decode(token));
      dispatch(setCurrentUser(jwt.decode(token)));
    });
  };
};
