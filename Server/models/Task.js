const mongoose = require('mongoose')

//Task Schema
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model("Task", TaskSchema)
// export default TaskModel 