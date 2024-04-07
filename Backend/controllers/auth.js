const {User} = require("../models/users")
const jwt = require("jsonwebtoken")
const {v4 : uuidv4} = require('uuid')
const {setUser , getUser} = require("../service/auth")

const handleUserSignup = async (req, res) => {
    const { name , email , password } = req.body;
    // add the check for the existing user
    const user = await User.findOne({
        email,
        password
    });
    if(user){
        return res.json({message: "User already exists"});
    }
    await User.create({
        name,
        email,
        password,
    });
    return res.json({message: "User created successfully"});
}

const handleUserSignin = async (req, res) => {
    const { email , password } = req.body;
    const user = await User.findOne({email, password});
    if(!user){
        return res.json({message: "Invalid email or password"});
    }
    const token = setUser(user);
    // setting the cookie
    // console.log(token);
    // res.cookie("uid", token);

    return res.json({token});
}

module.exports = {
    handleUserSignup,
    handleUserSignin
}