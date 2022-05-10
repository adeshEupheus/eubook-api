const  verifySignUp  = require("../middleware/verifiySignUp");
const controller = require("../controllers/auth.controller");
const router = require('express').Router()
const validation = require("../middleware/validation");
const authJwt = require("../middleware/authJwt");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // app.post(
  //   "/api/signup",
  //   authJwt.verifyToken, 
  //   [
  //     verifySignUp.checkDuplicateEmail,
  //     verifySignUp.checkDuplicatePhone,
  //     validation.validate('CreateUser'),
 
  //   ],
  //   controller.signup
  // );
  app.post("/api/signin",controller.signin);
 
};