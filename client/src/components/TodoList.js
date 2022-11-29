import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
// import Task from './Task';
import Tasks from './Tasks';



const TodoList = ({ todos, getTodos}) => {

  const [task, setTask] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const editable = (e) => {
    e.preventDefault();

  }

  const getTask = async (id) => {
    const res = await axios.get(`/gettasks/${id}`)
  }

  const handledeleteTodo = async (id)=> {
    const res = await axios.delete(`/deletetodo/${id}`)
    getTodos()

  }
  

  useEffect(() => {

  }, [])


  return (
    <div className='todoList flex flex-wrap border-2 justify-around m-4 p-4 border-2'>
      {console.log(">>>>", todos)}
      {todos && todos.map(todo => {
        return <div className="todo  p-4 relative w-1/2 border-2">
          <div className="todo-title flex items-center justify-between border-2">
            <h2 className='text-2xl' onClick={(e) => editable(e)} >{todo.title}</h2>
            <div className="todo-btns ml-2 ">
              <button className='mx-2'>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className='ml-2' onClick={(e)=>handledeleteTodo(todo._id)}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="tasks">
            <div className="tasks relative left-4 border-2">
             
              {/* {todo.tasks && todo.tasks.map((task,idx) => {
              return <Task key={uuidv4()} idx={idx} id ={todo._id} task={task} deleteTask={deleteTask}/>
            })} */}
              {<Tasks tasks={todo.tasks} id={todo._id} />}
            </div>
          </div>
        </div>
      })}

      {/* <div className="todo p-4 relative w-1/2 border-2">
        <div className="todo-title flex items-center justify-between border-2">
          <h2 className='text-2xl' onClick={(e) => editable(e)} >todo.title</h2>
          <div className="todo-btns ml-2 ">
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='ml-2'>
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>
        </div>
        <div className="tasks relative left-4 border-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="todoinput  mt-4 flex items-center justify-between text-md">
              <input className=' p-1 flex-1' type="text" placeholder='Enter your Todo' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
              <button className='ml-8 py-1 px-2  border-2 border-red border-solid' type="submit">Create</button>
            </div>

          </form>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button></div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="todo p-4 relative w-1/2 border-2">
        <div className="todo-title flex items-center justify-between border-2">
          <h2 className='text-2xl'>todo.title</h2>
          <div className="todo-btns ml-2 ">
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='ml-2'>
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>
        </div>
        <div className="tasks relative left-4 border-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="todoinput  mt-4 flex items-center justify-between text-md">
              <input className=' p-1 flex-1' type="text" placeholder='Enter your Todo' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
              <button className='ml-8 py-1 px-2  border-2 border-red border-solid' type="submit">Create</button>
            </div>

          </form>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button></div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="todo p-4 relative w-1/2 border-2">
        <div className="todo-title flex items-center justify-between border-2">
          <h2 className='text-2xl'>todo.title</h2>
          <div className="todo-btns ml-2 ">
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='ml-2'>
              <i class="fa-solid fa-trash"></i>
            </button>

          </div>
        </div>
        <div className="tasks relative left-4 border-2">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="todoinput  mt-4 flex items-center justify-between text-md">
              <input className=' p-1 flex-1' type="text" placeholder='Enter your Todo' name='title' value={task} onChange={(e) => setTask(e.target.value)} />
              <button className='ml-8 py-1 px-2  border-2 border-red border-solid' type="submit">Create</button>
            </div>

          </form>
          <div className='flex justify-between'>
            <span className='flex-1'>task</span>
            <div className="btns">
              <button className='mx-2'>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button className='mx-2'>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          <div>
            <span>task</span>
            <button className='mx-2'>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='mx-2'>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default TodoList