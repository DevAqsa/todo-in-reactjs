import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


function TodoList() {
    const [todos, setTodos] = useState([{task: "sample task", id : uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");


    let addNewTask =()=>{

        setTodos ((prevTodos) =>{
            return ([...prevTodos, {task: newTodo, id : uuidv4(), isDone:false}]);
        })
        setNewTodo("");
    }


    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
        console.log(newTodo);
    }

    let deleteTodo = (id) =>{

        setTodos(() => todos.filter((prevTodos) => prevTodos.id != id));
        
    }

    let markAllDone = () =>{
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        })
    };


    let markAsDone = (id) =>{

        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {

                if(todo.id === id){
                    return {
                        ...todo,
                        isDone: true
                    }
                } else {
                    return todo;
                }
            })
        })
       
    };



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
            return <li key={todo.id}><span style={todo.isDone ? {textDecorationLine: "line-through"} : {} }>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>mark As Done</button>
            </li>
           
        })}
        
    </ul>

    <button onClick={markAllDone}>mark All Done</button>
        

    </div>
  )
}

export default TodoList