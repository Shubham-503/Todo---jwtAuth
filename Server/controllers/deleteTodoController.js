const Todo = require('../models/Todo')

const deleteTodoController = async (req, res) => {
    try {
        // Extract id 
        const { id } = req.params;

        // Query DB and delete
        const userId = req.user.id
        const todo = await Todo.findOneAndDelete({_id:id,user:req.user.id})

         // Send Response Back to Client
         res.status(201).json({
            success: true,
            message: 'Todo Deleted Successfully',
            todo,
        })
    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Todo Deletion',
            error

        })
    }
}

module.exports = deleteTodoController