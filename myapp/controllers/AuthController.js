const User = require("../models/User"); //Import Model
const bcrypt = require("bcrypt");
const { generateAccessToken, decodedAccessToken } = require("../helpers/jwt");
const saltRounds = 10;

module.exports = {
  register: async (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password.toString(), saltRounds, async (err, hash) => {
      const user = await User.create({
        name,
        email,
        password: hash,
      });
      res.json(user);
    });
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    //Validate
    const user = await User.findOne({ email: email }).exec();

    if (!user) {
      res.status(401).json({
        code: 401,
        message: "Login Failed",
      });
      return;
    }

    //So sánh password
    const { password: hash } = user;
    bcrypt.compare(password, hash, function (err, result) {
      // result == true

      if (result) {
        const accessToken = generateAccessToken({
          name: user.name,
          email: user.email,
        });
        res.json({ status: result, accessToken: accessToken });
        return;
      }

      res.status(401).json({
        code: 401,
        message: "Login Failed",
      });
    });
  },

  profile: async (req, res) => {
    const bearerToken = req.get("Authorization");
    if (bearerToken) {
      const accessToken = bearerToken.replace("Bearer", "").trim();
      const decoded = decodedAccessToken(accessToken);

      const { email } = decoded.data;
      const user = await User.findOne({ email: email }).exec();

      res.json(user);
    }
  },
};
