const Todo = require('../models/Todo')

const getTasksTodoController = async (req, res) => {
    try {
        // Extract id 
        const { id } = req.params

        // Query DB and get Task
        const todo = await Todo.findById(id)
        const task = todo.tasks

         // Send Response Back to Client
         res.status(200).json({
            success: true,
            message: 'Task Fetch Successfull',
            task,
        })
    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Task Fetch',
            error

        })
    }
}

module.exports = getTasksTodoController