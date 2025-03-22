const mongoose = require("mongoose");
const { mongodbUrl } = require("../secret");
const connectDB = async (options = {}) => {
  try {
    await mongoose.connect(mongodbUrl, options);
    console.log("connection to mongoDB is ok!");
    mongoose.connection.on("error", (error) => {
      console.error("DB connection error: ", error);
    });
  } catch (error) {
    console.error("couldn't connect to db: ", error.toString());
  }
};
module.exports = connectDB;