import axios from "axios";

const createEvent = event => {
  return dispatch => {
    axios.post("/api/event", event);
  };
};

export { createEvent };
