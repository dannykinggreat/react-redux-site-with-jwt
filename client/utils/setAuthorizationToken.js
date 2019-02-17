import axios from "axios";

export default token => {
  if (token) {
    console.log("Setting token header");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log("Setting token header", axios.defaults.headers);
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
