const db = require("../models/user");
const users_master = db.users_master;
checkDuplicateEmail = (req, res, next) => {
  //return res.send(req.body.email);
  users_master.findOne({
    where: {
        email: req.body.email
    }
  }).then(user => {
    if (user) {
       return res.status(200).send({
        message: "Failed! email is already in taken!"
      });
     
    }
    else{
      next();
    }
    

  });
 
};


checkDuplicatePhone = (req, res, next) => {


  users_master.findOne({
    where: {
      phone: req.body.phone
    }
  }).then(user => {
    if (user) {
      return  res.status(200).json({
        message: "Failed! phone is already in taken!"
      });
    }else{
      next();
    }
});

   
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
  checkDuplicatePhone:checkDuplicatePhone,
 
};
module.exports = verifySignUp;