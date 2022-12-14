const Todo = require("../models/Todo")

const toggleTaskStatusController = async (req, res) => {
    try {
        console.log("in toggletaskcontroller");
        // Extract id and task
        const { id, idx } = req.params
        console.log(id,idx);
        // const { task } = req.body
        // const { token } = req.cookies

        // Query DB and edit task
        const todo = await Todo.find({_id:id,user:req.user?.id,});
        if (todo.length == 0)
            return res.status(200).json({
                message: "No todo found"
            })
        todo[0].tasks[idx].isCompleted = !(todo[0].tasks[idx].isCompleted)
        todo[0].save()

        // Send Response Back to Client
        res.status(201).json({
            success: true,
            message: 'Task Status Changed Successfully',
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

module.exports = toggleTaskStatusController