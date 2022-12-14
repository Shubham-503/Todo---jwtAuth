const mongoose = require('mongoose')

//import Task Model
// const Task = require("./Task")

//Todo Schema
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    tasks: [{
        task:String,
        isCompleted:Boolean
    }],
    user: {
        type: mongoose.ObjectId,
        required:[true, "user Id is missing"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model("Todo", TodoSchema)
// export default TodoModel