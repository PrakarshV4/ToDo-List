import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import {TodosShow} from './todosShow'
import { Input } from "./Input";
export default function TodoComp(){
    const [task,setTask] = useState("");
    const [todo,setTodo] = useState([]);
    const token = localStorage.getItem('token');
    // console.log("token in TODCOMP: " +JSON.parse(token));
    const removeTodo =(id)=>{
        const newTodos = todo.filter((d,index)=>{
            if(index !== id){
                return true
            }else{
                return false
            }
            setTodo(newTodos)
        })
    }
    console.log(todo)
    useEffect(()=>{
        axios.get('http://localhost:3000/getTodos',{
                headers:{
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            })
            .then((res)=>{
                setTodo(res.data);
            })
            .catch((err)=>{console.log(err)})
    },[])

    return(
        <div  className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 lg:w-[50%]">
                <div className="text-2xl font-semibold mb-4 ml-[40%]">Tasks</div>
                <Input setTask={setTask} task={task} setTodo={setTodo} todo={todo} />
                <TodosShow todos={todo} removeTodo={removeTodo}></TodosShow>
            </div>
        </div>
    )
}

