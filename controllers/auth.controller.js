const db = require("../models/user");
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
// exports.signup = (req, res) => {
//   try {
//     const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

//     if (!errors.isEmpty()) {
//       res.status(200).json({ errors: errors.array() });
//       return;
//     }
//     if(req.userId == ''){
//       return status(200).json({message: "Error! :  Something went wrong "})
//     }
//     // check password
//     if(req.body.password == req.body.confirmPassword){
//       USER_MASTER.create({
//         FIRST_NAME : req.body.firstName,
//         MIDDLE_NAME : req.body.middleName,
//         LAST_NAME : req.body.lastName,
//         PRIMARY_MOBILE_NO : req.body.phone,
//         EMAIL : req.body.email,   
//         IS_ACITVE : false,
//         IS_ALLOWED : false,
//         IS_ON_MAINTENANCE : false,
//         FK_USER_GROUP_ID : 1,
//         CREATED_BY :req.userId ,
//         CREATED_ON : nDate,
//         MODIFIED_BY : 'AT001',
//         EMP_CODE : req.body.empCode,
//         REPORT_ID : req.body.repCode,
//       }) .then(user => {
//             if(user){
//                 USER_LOCATION_TAGGGING.create({
//                   FK_USER_ID : user.PK_ID,
//                   FK_STATE_ID : req.body.state,
//                   FK_COUNTRY_ID : req.body.country,
//                   CREATED_BY : req.userId,
//                   CREATED_ON : nDate,
//                 }).then(location => {
//                   if(location){
//                     USER_LOGIN.create({
//                       PASSWORD : user.PK_ID,
//                       HASHKEY : req.body.state,
//                       CREATED_BY : req.userId,
//                       CREATED_ON : nDate,
//                       FK_USER_ID : req.body.empCode,
//                       MAINTENANCE_PWD : req.body.maintenancePassword,
//                     }).then(password =>{
//                       if(password){
//                         return res.status(200).send({message: "User created successfully"});
//                       }else{
//                         return res.status(200).send({message: "Error! :  User not created  code3"});
//                       }
//                     })
//                   }else{
//                     return res.status(200).send({message: "Error! :  User not created  code2"});
//                   }
//                 })
//             }else{
//               return res.status(200).send({message: "Error! :  User not created  code1"});
//             }
//           })
//     }
    
    
//  } catch(err) {
//    return next(err)
//  }

// };

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