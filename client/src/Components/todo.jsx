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
    let keys = 1;
    // const addTodoHandler = (item)=>{
    //     setTodo([
    //         ...todo,
    //         {
    //             item,
    //             time: newDate().toTimeString()
    //         }
    //     ])
    // }
    console.log(todo)
    useEffect(()=>{
        setInterval(()=>{
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
        },1000)
    },[])

    return(
        <div  className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 lg:w-[50%]">
                <div className="text-2xl font-semibold mb-4 ml-[40%]">Tasks</div>
                <div className="flex justify-between">
                    <input className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:border-blue-500 flex-grow" type="text" placeholder="+ Add task" onChange={(e)=>{
                        setTask(e.target.value);
                    }}/>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-md focus:outline-none hover:bg-blue-700 pl-4" onClick={()=>{
                        axios.post('http://localhost:3000/todo',{task: task},{
                            headers:{
                                "Authorization": token
                            }
                        }).catch((err)=>{
                            console.log(err);
                        })
                    }}>Add</button>
                </div>
                <TodosShow todos={todo}></TodosShow>
                {/* <Input handler={addTodoHandler}/>
                <TodosShow data={todo}></TodosShow> */}
            </div>
        </div>
    )
}

