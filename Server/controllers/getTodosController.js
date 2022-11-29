const Todo = require("../models/Todo")

const getTodosController = async (req, res) => {
    try {
       

        // Query DB and get todo
        const todos = await Todo.find();

        // Send Response Back to Client
        res.status(200).json({
            success: true,
            message: 'Todo fetched successfully',
            todos
        })
        
    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Todos fetch',
            error

        })   
    }
}

module.exports = getTodosController