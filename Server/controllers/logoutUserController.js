
const logoutUserController = async (req,res) => {
    const options = {
        expires: new Date(Date.now()),
        httpOnly: true
    }
    req.user=null
    return res.status(200).cookie("token", null, options).json({
        success: true,
        message:"Logged Out"
        
    })
}

module.exports = logoutUserController
