const Todo = require("../models/Todo")

const editTaskTodoController = async (req, res) => {
    try {
        // Extract id and task
        const { id, idx } = req.params
        const { task } = req.body

        // Validate task
        if (!task) {
            return res.status(400).json({
                success: false,
                message: "Task Can't be Empty",
            })
        }

        // Query DB and edit task
        const todo = await Todo.findById(id);
        todo.tasks[idx]=task
        todo.save()

         // Send Response Back to Client
         res.status(201).json({
            success: true,
            message: 'Task Edited Successfully',
            todo,
        })

    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Title Creation',
            error

        })
    }
}
module.exports = editTaskTodoController
