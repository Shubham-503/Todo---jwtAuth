const Todo = require('../models/Todo')

const getTasksTodoController = async (req, res) => {
    try {
        // Extract id 
        const { id } = req.params

        // Query DB and get Task
        const todo = await Todo.find({_id:id,user:req.user.id})
        if (todo.length == 0)
            return res.status(200).json({
                message: "No todo found"
            })
        const task = todo[0].tasks

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