const mongoose = require("mongoose");

const userModal = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default: "https://www.w3schools.com/howto/img_avatar.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userModal);

module.exports = User;
