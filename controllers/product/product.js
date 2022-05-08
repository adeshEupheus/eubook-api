const db = require("./../../models/product");
const config = require("../../config/db.config");
const { validationResult } = require('express-validator');
const series_master = db.series_master;
const nDate = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Calcutta'
  });
exports.create= (req,res)=>{
    try{
        series_master.create({
            name:'test2',
            status:1,
            created_by:1,
            
           
           }).then(user =>{
               res.send(user);
           })
    }catch{
        res.send('hiiii');
    }
}
