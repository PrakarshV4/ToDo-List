import React, { useRef } from 'react'

export const Input = (props) => {
    const inputBox = useRef();
  return (
    <div className='p-3 flex justify-around'>
        <input type="text" placeholder='Enter data here!!' className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:border-blue-500 flex-grow"  ref={inputBox} onClick={()=>{
            props.handler(inputBox.current.value)
        }} />
        
    </div>
  )
}
