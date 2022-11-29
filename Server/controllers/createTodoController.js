const Todo = require("../models/Todo");

const createTodoController = async (req, res) => {
    try {
        // Extract title from req
        const { title } = req.body

        // Validate title
        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title Can't be Empty",
            })
        }
        console.log(req.user)
        const userId = req.user.id
        // Create Todo and Save in DB
        const todo = await Todo.create({ title,user:userId })

        // Send Response Back to Client
        res.status(201).json({
            success: true,
            message: 'Title Created Successfully',
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
    console.log("In create todo controller")

}

module.exports = createTodoController