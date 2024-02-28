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

        setTodos(() => todos.filter((prevTodos) => prevTodos.id != id));
        
    }

    // let upperCaseAll = () =>{
    //     setTodos((prevTodos) => {
    //         return prevTodos.map((todo) => {
    //             return {task: todo.task.toUpperCase(), id: todo.id}
    //         })
    //     })
    // };


    let upperCaseOne = (id) =>{

        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {

                if(todo.id === id){
                    return {task: todo.task.toUpperCase(), id: todo.id}
                } else {
                    return todo;
                }
            })
        })
       
    };



    let markDoneFeature = (id) =>{

        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {

                if(todo.id === id){
                    return {task: todo.task.strike(), id: todo.id}
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
            return <li key={todo.id}><span>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>UpperCase one</button>
            </li>
           
        })}
        
    </ul>

        <button onClick={markDoneFeature}>mark Done All</button>

    </div>
  )
}

export default TodoList