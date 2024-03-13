import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function SignupComp(){
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    return(
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 lg:w-[28%]">
            <div className="text-2xl font-semibold mb-4 ml-[40%]">SignUp</div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"type="text" placeholder="Name" onChange={(e)=>{
                setName(e.target.value);
            }}/><br />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" type="text" placeholder="Email address" onChange={(e)=>{
                setEmail(e.target.value);
            }} /><br />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" type="text" placeholder="password" onChange={(e)=>{
                setPassword(e.target.value);
            }}/><br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg tracking-wide font-medium w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>{
                axios.post('http://localhost:3000/signup',{name,email,password})
                .then((response)=>{
                    if(response.data.success==='true'){
                        navigate('/login');
                    }else {
                        alert("error");
                        navigate('/signup');
                    }
                })
            }}>Submit</button> 
            <div className="text-slate-800">Already have an account? 
                <button className="text-blue-600 hover:underline"onClick={()=>{
                    navigate('/login')
                }}>Login</button>
            </div>
        </div>
        </div>
    )
}