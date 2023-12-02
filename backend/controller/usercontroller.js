const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config();

exports.register = async(req,res)=>{
    try{ 
        // get all the data from body
        const { name, email, password, phone } = req.body;

        // check all the data should exit
        if(!(name && email && password && phone)){
            res.status(400).send("Please Filled all fields!!");
        }

        // check if user alresdy exist
        const existEmail = await User.findOne({ email });
        if(existEmail){
            res.status(400).send("this email already exist");
        }
        
        // encrypt the password
        const hashPassword = await bcrypt.hash(password, 10);

        // save the user in db
        const newUser = new User({name, email, password: hashPassword, phone})
        const usersave = await newUser.save();
        res.status(200).send(usersave);
    } catch(error){
        console.log(error);
    }
}



exports.login = async(req,res)=>{
    try{ 
        // get all the data from body
        const { email, password } = req.body;

        // check all the data should exit
        if(!( email && password )){
            res.status(400).send("Please Filled all fields!!");
        }

        // check if user alresdy exist
        const existuser = await User.findOne({ email });
        if(existuser){
            const passwordcheck = await bcrypt.compare(password, existuser.password);
            if (passwordcheck) {
                // use jwt here.
                const token = jwt.sign(
                    { id: existuser._id }, process.env.JWT_KEY , { expiresIn:"2h"}
                );
                existuser.token = token
                existuser.password = undefined;
                res.status(200).send({ token, existuser });
            }
            else{
                return res.status(400).send({messsage: "invalid password"})
            }
        } else {
            res.status(400).send("this user does not exist");
        }
    } catch(error){
        console.log(error);
    }
}