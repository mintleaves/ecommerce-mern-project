const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const { defaultImagePath } = require("../secret");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minLength: [3, "User name is too short (minimum 3 character)"],
      maxLength: [31, "User name is too long (maximum 31 character)"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        },
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minLength: [6, "Password is too short (minimum 6 character)"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
      type: String,
      default: defaultImagePath,
    },
    address: {
      type: String,
      required: [true, "User address is required"],
    },
    phone: {
      type: String,
      required: [true, "User phone number is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = model("Users", userSchema);
module.exports = User;
