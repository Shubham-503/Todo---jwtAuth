const Todo = require("../models/Todo")

const createTaskTodoController = async (req, res) => {
    try {
        // Extract todoId an task 
        const todoId = req.params.id
        const task = req.body.task
        // console.log(">>>>>>>>>>>>>", !task)
        // Validate task
        if (!task) {
            return res.status(400).json({
                success: false,
                message: "Task Can't be Empty",
            })
        }

        //Add Task to DB
        const todo = await Todo.findById(todoId)
        if(todo.user!==req.cookies.id){
            console.log("")
           return res.status(400).json({
                success: false,
                message: "Dont have permission to add"
            })
        }
        todo.tasks.push(task)
        todo.save()

        // send response to client
        res.status(201).json({
            success: true,
            message: 'Task added successfully',
            todo
        })

    } catch (error) {
        //Log error and send error message to client
        console.log(error.message)
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

module.exports = createTaskTodoController