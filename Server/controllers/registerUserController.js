const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

//import model - User
const User = require("../models/user")

const registerUserController = async (req, res)=>{
    try {
        //collect all information
        const {firstname, lastname, email, password } = req.body
        //validate the data, if exists
        if (!(email && password && lastname && firstname)) {
           return res.status(401).send("All fileds are required")
        }
        //check if email is in correct format

        //check if user exists or not
        const existingUser = await User.findOne({ email})
        if (existingUser) {
            return  res.status(401).send("User already found in database")
        }

        //encrypt the password
        const myEncyPassword = await bcrypt.hash(password, 10)

       
        //create a new entry in database
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: myEncyPassword,
        })
        
        //create a token and send it to user
        const token = jwt.sign({
            id: user._id, email
        }, 'shhhhh', {expiresIn: '2h'})
        

        user.token = token
        //don't want to send the password
        user.password = undefined

        res.status(201).json(user)


    } catch (error) {
        console.log(error);
        console.log("Error is response route");
    }
}

module.exports = registerUserController