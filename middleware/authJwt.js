const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/user");
const USER_LOGIN = db.USER_LOGIN;
verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized! "
      });
    }
    
    req.userId = decoded.id;
    
    next();
  });
};
isUserLogin = (req, res, next) => {
  USER_LOGIN.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isUserLogin: isUserLogin,
};
module.exports = authJwt;