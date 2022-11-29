const Todo = require("../models/Todo")

const getTodoController = async (req, res) => {
    try {
        // Extract id 
        const {id} = req.params

        // Query DB and get todo
        const todo = await Todo.findById(id);

        // Send Response Back to Client
        res.status(200).json({
            success: true,
            message: 'Todo fetched successfully',
            todo
        })
        
    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Todo fetch',
            error

        })   
    }
}

module.exports = getTodoController