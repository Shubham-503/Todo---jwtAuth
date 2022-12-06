import React, { useState } from 'react'

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    createTodo(title)

  }

  return (
    <div className="todoForm">
     
      <div class="flex  w-screen items-center justify-center p-5">
        <form class="w-full rounded-lg bg-gray-200 p-5 w-2/4" onSubmit={(e) => handleSubmit(e)} >
          <div class="flex">
            <input type="text" class="w-full bg-white pl-2 text-base font-semibold outline-0 rounded-tl-lg rounded-bl-lg "  value={title} onChange={(e) => setTitle(e.target.value)} placeholder="" id="" />
            <input type="submit" value="Add Todo" class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
          </div>
        </form>
      </div>

    </div>

  )
}

export default TodoForm