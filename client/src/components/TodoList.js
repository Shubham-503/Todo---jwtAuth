import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import Modal from 'react-modal';
import Tasks from './Tasks';
import ModalComponent from './ModalComponent';



const TodoList = ({ todos, getTodos }) => {

  const [task, setTask] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    id: "",
    title: "",
    text: "",
    isOpen: false
  })
  const [title, setTitle] = useState("")

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const getTask = async (id) => {
    const res = await axios.get(`/gettasks/${id}`)
  }

  const handledeleteTodo = async (id) => {
    const res = await axios.delete(`/deletetodo/${id}`)
    getTodos()

  }

  const modalSubmit = async (e, todo, id, idx = "") => {
    e.preventDefault()
    const res = await axios.put(`/edittodo/${id}`, { title: todo })
    getTodos()
  }

  useEffect(() => {
   getTodos()
  }, [])


  return (
    <div className='todoList flex flex-wrap  justify-around m-4 p-4 w-full'>
      {console.log(">>>>", todos)}
     

      {todos && todos.map(todo => {
        // setTitle(todo.title)
        return <div class="antialiased   text-slate-700  w-1/2" key={uuidv4()}>
          <div class="max-w-lg mx-4 my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <div class="flex flex-row justify-between items-center">
              <div>
                <h1 class="text-3xl font-medium">{todo.title}</h1>
              </div>
              <div class="inline-flex space-x-2 items-center ml-12">
                <button class="p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center text-indigo-200 hover:text-white bg-indigo-600 hover:bg-indigo-500"
                  onClick={() => { setModalData({ title: "Edit Todo", id: todo._id, text: todo.title, isOpen: true }) }}
                >
                  <i class="fa-solid fa-pen-to-square text-white"  ></i>
                </button>
                <button href="#" class="p-2 border border-red-200 rounded-md inline-flex space-x-1 items-center bg-red-600 hover:bg-red-500"
                  onClick={(e) => handledeleteTodo(todo._id)}
                >
                  <i class="fa-solid fa-trash text-white" ></i>
                </button>
              </div>
            </div>

            <div id="tasks" class="my-5">
              {<Tasks tasks={todo.tasks} id={todo._id} />}

            </div>
            <p class="text-xs text-slate-500 text-center">Last updated 12 minutes ago</p>
            <p class="text-xs text-slate-500 text-center">{todo.updatedAt}</p>
          </div>

        </div>
      })}

      <ModalComponent modalData={modalData} setModalData={setModalData} modalSubmit={modalSubmit} />
    </div>
  )
}

export default TodoList