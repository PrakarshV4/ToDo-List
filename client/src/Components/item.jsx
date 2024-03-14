import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
export const Item = ({id,item,removeTodo}) => {
    const [done,setDone]= useState(false);
    const time = new Date().getTime();
  return (
    <div onClick={()=>setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
        <div>
            <span className='pr-2 text-[14px] text-slate-400'>{time}</span>
            <span className={`${done ? 'line-through ' : ''}text-[20px] `}>{item}</span>
        </div>
        <div onClick={()=>{
          removeTodo(id)
        }} className='text-red-500'>
            <FaTrashCan></FaTrashCan>
        </div>
    </div> 
  )
}
