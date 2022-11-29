const express = require('express')
const router = express.Router()

// Controllers
const getTodosController = require('../controllers/getTodosController')
const getTasksTodoController = require('../controllers/getTasksTodoController')
const getTodoController = require('../controllers/getTodoController')
const getTaskTodoController = require('../controllers/getTaskTodoController')
const createTodoController = require('../controllers/createTodoController')
const createTaskTodoController = require('../controllers/createTaskTodoController')
const editTodoController = require('../controllers/editTodoController')
const editTaskTodoController = require('../controllers/editTaskTodoController')
const deleteTodoController = require('../controllers/deleteTodoController')
const deleteTaskTodoController = require('../controllers/deleteTaskTodoController')
const searchTodos = require('../controllers/searchtodos')
const todosByOrderController = require('../controllers/todosByOrderController')
const registerUserController = require('../controllers/registerUserController')
const loginUserController = require('../controllers/loginUserController')
const auth = require('../middlewares/auth')

// Routes

router.post('/registeruser',registerUserController)
router.post('/loginuser',loginUserController)
router.get('/gettodos',auth,getTodosController)
router.get('/gettasks/:id',auth,getTasksTodoController)
router.get('/gettodo/:id',auth,getTodoController)
router.get('/gettask/:id/:idx',auth,getTaskTodoController)
router.post('/createtodo',auth,createTodoController)
router.post('/createtask/:id',auth,createTaskTodoController)
router.put('/edittodo/:id',auth,editTodoController)
router.put('/edittask/:id/:idx',auth,editTaskTodoController)
router.delete('/deletetodo/:id',auth,deleteTodoController)
router.delete('/deletetask/:id/:idx',auth,deleteTaskTodoController)
router.get('/search',auth,searchTodos)
router.get('/gettodosbyorder',auth,todosByOrderController)

module.exports = router