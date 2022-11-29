import React from 'react'

const Task = ({ task,id,idx,deleteTask }) => {
    return (
        <div className="tasks relative left-4 border-2">
            <div>
                <span>{task}</span>
                <button className='mx-2'>
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button className='mx-2' onClick={()=>deleteTask(id,idx)}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>

        </div>

    )
}

export default Task 