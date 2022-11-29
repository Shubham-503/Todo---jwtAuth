const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


//import model - User
const User = require("../models/user")

const loginUserController = async (req, res) => {
    try {
        //collected information from frontend
        const {email, password} = req.body
        //validate
        if (!(email && password)) {
            res.status(401).send("email and password is required")
        }

        //check user in database
        const user = await User.findOne({email})
        //if user does not exists - assignment
        //match the password
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({id: user._id, email}, 'shhhhh', {expiresIn: '2h'})

            
            user.password = undefined
            user.token = token

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            return res.status(200).cookie("token", token, options).json({
                success: true,
                token,
                user
            })

        }
        //create token and send
       return res.sendStatus(400).send("email or password is incorrect")
    } catch (error) {
        console.log(error);
    }

    
}

module.exports = loginUserController