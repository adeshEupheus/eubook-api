const db = require("../models/user");
const {Op} = require('sequelize')
const config = require("../config/auth.config");
const { validationResult } = require('express-validator');
// const USER_LOGIN = db.USER_LOGIN;
// const USER_MASTER = db.USER_MASTER;
// const USER_LOCATION_TAGGGING = db.USER_LOCATION_TAGGGING;
const users_master = db.users_master;

 //const Op = db.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const nDate = new Date().toLocaleString('en-US', {
  timeZone: 'Asia/Calcutta'
});


// User Signup
exports.signup = async (req, res) => {
  try {
    const user = await users_master.findOne({
      where: {
        [Op.or]: [{phone: req.body.phone}, {email: req.body.email}]
      }
    })
    if(user){
      if(user.email === req.body.email){
        return res.status(200).json({msg: 'Email Already Exist'})
      } else {
        return res.status(200).json({msg: 'Phone Number Already Exist'})
      }
    } else {
      const saltRounds = 10
      req.body.password = await bcrypt.hash(req.body.password, saltRounds)
      const newUser = await users_master.create(req.body)
      return res.status(200).json(newUser)
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'something went wrong'})
  }
}

// User Signin
exports.signin = (req, res) => {
  //res.send(req.body.email)
  users_master.findOne({
    where: { 
        email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(200).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(200).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.FK_USER_ID }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      res.status(200).send({
        id: user.id,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(200).send({ message: err.message });
    });
  
};