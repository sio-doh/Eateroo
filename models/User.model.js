const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    }
  },
);

const User = model("User", userSchema);
module.exports = User;
