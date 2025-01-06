import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("") // input text
  const [todos, setTodos] = useState([]) // array to hold all the list of tasks

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos")) 
      setTodos(todos)
    }
    
  }, [])
  

  const saveLocal = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
    
  }
  

  const handleEdit=(e, id)=>{
   let t=  todos.filter(item=>item.id===id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveLocal()
  }
  const handleDelete=(e, id)=>{
    let newTodos = todos.filter(item=>{
      return item.id!==id
    });
    setTodos(newTodos)
    saveLocal()
    
  }
  const handleAdd=()=>{
    setTodos([...todos,{id: uuidv4(), todo, isCompleted:false}])
    setTodo("")
    saveLocal()
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id ===id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted =!newTodos[index].isCompleted;
    setTodos(newTodos)
    saveLocal()
  }
  

  return (
    <>
    <Navbar/>
     <div className="container mx-auto my-5 rounded-xl p-5 bg-emerald-900 text-orange-200 overflow-auto">      
      <h1 className='text-2xl font-semibold'>Your Quick List</h1>
      <div className="addTodo my-5">
        <h2 className="text-lg">Add a todo:</h2>
        <input type="text" onChange={handleChange} value={todo}className="w-1/2"name="" id="" />
        <button onClick={handleAdd} className="bg-orange-500 hover:bg-orange-600 rounded-md px-2 py-1 mx-8 font-bold">Add</button>
      </div>
      <div className="todos">
        {todos.length ===0 && <div>No Tasks added yet &#128530; </div>}
        {todos.map(item=>{        
        return <div key={item.id} className="todo flex w-1/4 justify-evenly my-3">
          <div className="flex gap-5">          
          <input name={item.id} onChange={handleCheckbox} type="checkbox" value = {item.isCompleted} id="" />
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          </div>
          <div className="buttons flex h-full">
            <button onClick={(e)=>{handleEdit(e, item.id)}} className="bg-orange-500 hover:bg-orange-600 rounded-md px-2 py-1 mx-2 font-bold">edit</button>
            <button onClick={(e)=>{handleDelete(e, item.id)}} className="bg-orange-500 hover:bg-orange-600 rounded-md px-2 py-1 mx-2 font-bold">delete</button>
          </div>
        </div>
        })}
      </div>      
     </div>
    </>
  )
}

export default App
/* 30:57 */