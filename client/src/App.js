import './App.css';
import axios from 'axios'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState("")

  const createTodo = async (title) => {
    try {
      const res = await axios.post('/createtodo', { title })
      console.log(res)
      getTodos()

    } catch (error) {
      console.log(error.message);
    }
  }

  const getTodos = async () => {
    try {
      const res = await axios.get('/gettodos')
       setTodos(res.data.todos)
      console.log(todos);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getTodos()
  },[])
  


  return (
    <div className="App bg-[#b3b3b3] pt-4 flex items-center justify-center flex-col border-2">
      <TodoForm createTodo={createTodo} />
      <TodoList todos={todos} getTodos={getTodos} />
    </div>
  );
}

export default App;
