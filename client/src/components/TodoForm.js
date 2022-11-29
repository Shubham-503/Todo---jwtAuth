import React, { useState } from 'react'

const TodoForm = ({createTodo}) => {
  const [title, setTitle] = useState("")

 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    createTodo(title)

  }

  return (
    <div className="todoForm">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="todoinput  mt-4 flex items-center justify-between text-xl">
          <input className=' p-2' type="text" placeholder='Enter your Todo' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
          <button className='ml-8  border-2 border-red border-solid' type="submit">Create</button>
        </div>

      </form>
    </div>

  )
}

export default TodoForm