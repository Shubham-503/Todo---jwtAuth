const Todo = require('../models/Todo')

const getTaskTodoController = async (req, res) => {
    try {
        // Extract id and idx
        const { id, idx } = req.params

        // Query DB and get Task
        const todo = await Todo.findById(id)
        const task = todo.tasks[idx]

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

module.exports = getTaskTodoController