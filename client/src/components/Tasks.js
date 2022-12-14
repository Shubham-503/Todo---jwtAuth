import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ModalComponent from './ModalComponent';
import Task from './Task';


const Tasks = ({ tasks, id }) => {
  const [task1, setTask1] = useState([])
  const [taskInput, setTaskInput] = useState("")
  const [modalData, setModalData] = useState({
    id: "",
    title: "",
    text: "",
    isOpen: "",
    idx: ""
  })

  const deleteTask = async (id, idx) => {
    const res = await axios.delete(`/deletetask/${id}/${idx}`)
    console.log(res)
    getTask(id)
  }

  const getTask = async (id) => {
    const res = await axios.get(`/gettasks/${id}`)
    console.log(res.data.task)
    setTask1(res.data.task)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("task creating for id: ", id, e)
    try {
      const res = await axios.post(`/createtask/${id}`, { task: taskInput });
      console.log(res.data.todo.tasks)
      setTask1(res.data.todo.tasks)
      setTaskInput("")
    } catch (error) {
      console.log(error);
    }

  }

  const modalSubmit = async (e, text, id, idx) => {
    e.preventDefault()
    console.log('In modalSubmit')
    // IDX missing
    try {
      console.log(text, id, idx)
      const res = await axios.put(`/edittask/${id}/${idx}`, { task: text })
      console.log(res)
      getTask(id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setTask1(tasks)
    // getTask(id)
  }, [])

  // console.log('tasks>>>', tasks)
  return (
    <div >
      <div id="task-input" className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent w-full">
        <form className="relative text-lg bg-transparent text-gray-800 w-full" onSubmit={(e) => handleSubmit(e)} >
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none" type="text" placeholder="Add Task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)}/>
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>

      {task1 && task1.map((task, idx) => {
        return <Task task={task} id={id} idx={idx} getTask={getTask} key={uuidv4()} />
      })}
       </div>

  )
}

export default Tasks 