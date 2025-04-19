require("dotenv").config();
const serverPort = process.env.SERVER_PORT || 3002;
const mongodbUrl =
  process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/mern-ecommerce";

const defaultImagePath =
  process.env.DEFAULT_USER_IMAGE_PATH || "public/images/users/default-user.jpg";

const jwtActivationKey =
  process.env.JWT_ACTIVATION_KEY || "jshdgfseyfjf_74628732";

const smtpUsername = process.env.SMTP_USERNAME || "";
const smtpPassword = process.env.SMTP_PASSWORD || "";
const clientURL = process.env.CLIENT_URL || "";

module.exports = {
  serverPort,
  mongodbUrl,
  defaultImagePath,
  jwtActivationKey,
  smtpUsername,
  smtpPassword,
  clientURL,
};
