import React, { useState } from 'react'
import ModalComponent from './ModalComponent'
import axios from 'axios';


const Task = ({ task, id, idx, getTask }) => {

    const [modalData, setModalData] = useState({
        id: "",
        title: "",
        text: "",
        isOpen: false,
        idx: ""
    })

    const [isCompleted, setIsCompleted] = useState(task.isCompleted)

    const modalSubmit = async (e, text, id, idx) => {
        e.preventDefault()
        console.log('In modalSubmit')
        try {
            console.log(text, id, idx)
            const res = await axios.put(`/edittask/${id}/${idx}`, { task: text })
            console.log(res)
            getTask(id)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async (id, idx) => {
        const res = await axios.delete(`/deletetask/${id}/${idx}`)
        console.log(res)
        getTask(id)
    }

    const toggletaskstatus = async(id,idx) => {
        try {
            const res = await axios.put(`/toggletaskstatus/${id}/${idx}`)
        setIsCompleted(!isCompleted)
        console.log(res)
        } catch (error) {
           console.log(error.message) 
        }
        
      }

    return (
        <>
            <div id="task" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
                <div className="inline-flex items-center space-x-2" onClick={()=>{toggletaskstatus(id,idx)}} >
                    <div>
                        {isCompleted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        ) : (

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}

                    </div>
                    <div className={`${isCompleted ? "line-through" : ""} text-black-500`}>{task.task}</div>
                </div>
                <div>
                    <button className="p-2  inline-flex space-x-1 items-center" onClick={() => { setModalData({ title: "Edit Task", id: id, text: task.task, isOpen: true, idx: idx }) }} >
                        <i className="fa fa-edit"></i>

                    </button>
                    <button href="#" className="p-2 inline-flex space-x-1 items-center" onClick={() => deleteTask(id, idx)}>
                        <i className="fa-solid fa-trash" ></i>
                    </button>
                </div>
            </div>

            <ModalComponent modalData={modalData} setModalData={setModalData} modalSubmit={modalSubmit} />

        </>
    )
}

export default Task