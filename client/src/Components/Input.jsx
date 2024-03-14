import React, { useRef } from 'react'
import axios from 'axios';
export const Input = ({setTask,task,setTodo,todo}) => {
    const inputBox = useRef();
    const token = localStorage.getItem('token');
  return (
    <div className='p-3 flex justify-around'>
        {/* <input type="text" placeholder='Enter data here!!' className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:border-blue-500 flex-grow"  ref={inputBox} onClick={()=>{
            props.handler(inputBox.current.value)
        }} /> */}
        <div className="flex justify-between">
            <input className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:border-blue-500 flex-grow" type="text" placeholder="+ Add task" onChange={(e)=>{
               setTask(e.target.value);
             }}/>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-md focus:outline-none hover:bg-blue-700 pl-4" onClick={()=>{
               axios.post('http://localhost:3000/todo',{task: task},{
                  headers:{
                    "Authorization": token
                  }
              }).then((res)=>{
                  setTodo([...todo,task])
              })
              .catch((err)=>{console.log(err)})
          }}>Add</button>
        </div>
    </div>
  )
}
