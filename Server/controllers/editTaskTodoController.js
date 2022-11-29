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
        // newtasks=
        const todo = await Todo.find({ _id: id, user: req.user.id });
        if (todo.length == 0)
            return res.status(200).json({
                message: "No todo found"
            })
        todo[0].tasks[idx] = task
        todo[0].save()

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
