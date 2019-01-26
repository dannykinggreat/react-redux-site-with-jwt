import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  timeZone: {
    type: String,
    required: true
  }
});
// userSchema.methods.addUser = (user, callback) => {
//   User.create(user, callback);
// };

const User = mongoose.model("User", userSchema);

//function to add  data to db. Takes an user object from request and a callback function
const addUser = (user, callback) => {
  User.create(user, callback);
};

export { User, addUser };
