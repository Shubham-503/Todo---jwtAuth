import './App.css';
import axios from 'axios'
import {
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import Cookies from 'universal-cookie';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';
// import { deleteCurrentSession } from './appwrite/utils';

function App() {
  const [todos, setTodos] = useState("")
  const [searchInput, setSearchInput] = useState("")
  const [isAuth, setIsAuth] = useState(false)
  const [id, setId] = useState(false)
  const history = useHistory()
  const cookies = new Cookies();


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
      const res = await axios.get(`/gettodos/`)
      setTodos(res.data.todos)
      console.log(todos);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
   getTodos()
  }, [])

  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      // await deleteCurrentSession();
      cookies.remove('f_token')
      setIsAuth(false)
      await axios.get('/logoutuser')
    } catch (e) {
      console.log(e)
    }
    history.push('/login')
  }

  const handleSearch = async (e,query) => {
    e.preventDefault();
    console.log('search called');
    try {
      const res = await axios.get(`/search?q=${query}`)
      setTodos(res.data.todo)
      console.log(todos);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="App bg-[#03203C] pt-4 flex items-center justify-center flex-col border-2">



      <Switch>
        <Route path="/todos" exact>
          {isAuth ? (
            <>
              <TodoForm createTodo={createTodo} />
              <TodoList todos={todos} getTodos={getTodos} />
              <div className="flex justify-between items-center absolute top-0 right-4">
                <div id="task-input" class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent w-full">
                  <form className="relative text-lg bg-transparent text-white w-full" onSubmit={(e) => handleSearch(e,searchInput)} >
                    <div className="flex items-center  py-2">
                      <input className="bg-transparent border-none mr-3 px-2  focus:outline-none" type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                        <i class="fa fa-search text-white" aria-hidden="true"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <button className="mt-5   border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit" onClick={(e) => { handleSignOut(e) }} color="white" >Sign Out</button>
              </div>
            </>
          ) : (
            <Redirect to="/login" />
          )}


        </Route>
        <Route path="/login" exact>
          <h1>login Page</h1>
          <LoginUser setIsAuth={setIsAuth} />
        </Route>
        <Route path="/register" exact>
          <RegisterUser />
        </Route>
        <Route path="/" exact>
          <Redirect to={'login'} />
        </Route>

      </Switch>
    </div>



  );
}

export default App;
