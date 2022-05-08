const { check } = require('express-validator')

exports.validate = (method) => {
  switch (method) {
    case 'CreateUser': {
     return [ 
        check('first_name', "First Name Required").exists(),
        check('last_name', "Middle name").optional(),
        check('phone', "phone required ").exists(),
        check('phone', "phone should be 10 digits ").isLength({min:10,max:10}),
        check('email', "email required").exists().isEmail(),
        check('password', 'password required').exists(),
        check('password', 'password should be minimum 8 digits').isLength({min:8}),
        check('confirmPassword','password does not match').exists(),
       ]   
    }
  }
}