var jwt = require("jsonwebtoken");

const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRE } = process.env;

const generateAccessToken = (data) => {
  return jwt.sign(
    {
      data: data,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRE * 1000 }
  );
};

const decodedAccessToken = (token) => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
};

module.exports = { generateAccessToken, decodedAccessToken };
