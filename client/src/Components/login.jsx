import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
export default function LoginComp(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return(
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 lg:w-[25%]">
            <div className="text-2xl font-semibold mb-4 ml-[40%]">Login</div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" type="text" placeholder="Email" onChange={(e)=>{
                setEmail(e.target.value);
            }} /><br />
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2" type="text" placeholder="Password" onChange={(e)=>{
                setPassword(e.target.value);
            }} /><br />
            <button className="bg-green-500 hover:bg-green-700 text-white text-lg tracking-wide font-medium w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"onClick={()=>{
                 axios.post('http://localhost:3000/login',{email,password})
                 .then((response)=>{
                    if(!response.data.token){
                        console.log("Token not found as user not found")
                        navigate('/login');
                    }
                     if(response.data.success==='true'){
                        localStorage.setItem('token',JSON.stringify(response.data.token));
                        navigate('/todo');
                     }else {
                        alert("Login Failed");
                        console.log(response);
                        navigate('/login');
                     }
                 })
            }}>Enter</button>
            <div className="text-slate-800 pt-1">Don't have an account?<button onClick={()=>{
                navigate('/signup')
            }} className="text-blue-600 hover:underline">SignUp</button></div>
        </div>
        </div>
    )
}

