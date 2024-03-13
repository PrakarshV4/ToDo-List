import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
export const Item = () => {
    const [done,setDone]= useState(false);

  return (
    <div onClick={()=>setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
        <div>
            <span className='pr-2 text-[14px] text-slate-400'>10.30</span>
            <span className={`${done ? 'line-through ' : ''}text-[20px] `}>Items</span>
        </div>
        <div className='text-red-500'>
            <FaTrashCan></FaTrashCan>
        </div>
    </div> 
  )
}
