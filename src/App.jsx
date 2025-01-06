import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [todo, setTodo] = useState("") // input text
  const [todos, setTodos] = useState([]) // array to hold all the list of tasks
  const handleEdit=()=>{

  }
  const handleDelete=()=>{
    
  }
  const handleAdd=()=>{
    setTodos([...todos,{todo, isCompleted:false}])
    setTodo("")
  }
  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  return (
    <>
    <Navbar/>
     <div className="container mx-auto my-5 rounded-xl p-5 bg-emerald-900 text-orange-200">      
      <h1 className='text-2xl font-semibold'>Your Quick List</h1>
      <div className="addTodo my-5">
        <h2 className="text-lg">Add a todo:</h2>
        <input type="text" onChange={handleChange} value={todo}className="w-1/2"name="" id="" />
        <button onClick={handleAdd} className="bg-orange-500 hover:bg-orange-600 rounded-md px-2 py-1 mx-8 font-bold">Add</button>
      </div>
      <div className="todos">
        {todos.map(item=>{

        
        return <div className="todo flex">
          <div className={item.isCompleted?"":"line-through"}>{item.todo}</div>
          <div className="buttons">
            <button onClick={handleEdit} className="bg-orange-500 hover:bg-orange-600 rounded-md px-2 py-1 mx-2 font-bold">edit</button>
            <button onClick={handleDelete} className="bg-orange-500 hover:bg-orange-600 rounded-md px-2 py-1 mx-2 font-bold">delete</button>
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