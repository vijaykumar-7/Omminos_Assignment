const User = require('../models/user')
const jwt = require('jsonwebtoken')
require("dotenv").config();


// user login authentication`
exports.loginauth = async(req,res,next)=>{
    try {
        const authuser = jwt.verify(req.headers.authorization,process.env.JWT_KEY);
        req.existuser =authuser
        next();   
    } catch (error) {
        console.log(error);
    }
}


// admin access

exports.adminauth = async(req,res,next)=>{
    try {
        const user= await User.findById(req.existuser._id);
        if(user.role!==1){
            return res.status(401).send({
                success:false,
                message:"unauthorizes access"
            })
        }
        else{
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:"error in admin dashboard"
        })
    }
}