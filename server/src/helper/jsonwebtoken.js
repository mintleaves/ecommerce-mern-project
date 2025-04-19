const jwt = require("jsonwebtoken");
const createJSONWebToken = (payload, secretKey, expiresIn) => {
  if (typeof payload !== "object" || !payload === null) {
    throw new Error("Payload must be a non-empty object");
  }
  if (typeof secretKey !== "string" || secretKey === "") {
    throw new Error("Secret key must be a non-empty string");
  }

  try {
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
  } catch (error) {
    throw new Error("Error creating JWT: " + error.message);
  }
};
module.exports = {
  createJSONWebToken,
};
