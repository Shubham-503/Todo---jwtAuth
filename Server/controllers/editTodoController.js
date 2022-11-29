const Todo = require("../models/Todo")

const editTodoController = async (req, res) => {
    try {
        //Extract id and title
        const { id } = req.params
        const { title } = req.body

        // Validate title
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title Can't be Empty",
            })
        }

        // Query DB and edit title
        const todo = await Todo.findOneAndUpdate({_id:id,user:req.user.id},{title});
        // todo.title = title
        // todo.save()

        // Send Response Back to Client
        res.status(201).json({
            success: true,
            message: 'Title Edited Successfully',
            todo,
        })

    } catch (error) {
        // Log the error and send back response to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: 'Error Occured in Title Edit',
            error

        })
    }
}

module.exports = editTodoController
