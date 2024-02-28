import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


function TodoList() {
    const [todos, setTodos] = useState([{task: "sample task", id : uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask =()=>{

        setTodos ((prevTodos) =>{
            return ([...prevTodos, {task: newTodo, id : uuidv4()}]);
        })
        setNewTodo("");
    }

    let updateTodoValue = (event) =>{

       
        setNewTodo(event.target.value);
        console.log(newTodo);
    }

    let deleteTodo = (id) =>{

        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
        
    }

  return (
    <div>
    <input placeholder='add a Task' value={newTodo} onChange={updateTodoValue}></input>
    <br></br>
    <button onClick={addNewTask}>Add Task</button>
    <br></br><br></br><br></br>
    
    <hr></hr>
    <h4>Tasks</h4>

    <ul>
        {todos.map((todo) => {
            return <li key={todo.id}><span>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button></li>
           
        })}
    </ul>


    </div>
  )
}

export default TodoList