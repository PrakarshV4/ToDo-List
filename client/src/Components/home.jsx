import { useNavigate } from "react-router-dom"
export default function HomeComp(){
    const navigate = useNavigate();
    return(
        <div className=" ">
            <div className="flex justify-center items-center font-medium text-5xl text-white italic pt-4 mt-60">Welcome to ToDo List </div>
            <div className="flex justify-center items-center p-3">
                <button className="m-5 p-48 text-xl font-medium bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded" onClick={()=>{
                    navigate('/signup')
                }}>SignUp</button>
                <button className="text-xl font-medium bg-blue-500 hover:bg-blue-700 text-white  py-3 px-8 rounded" onClick={()=>{
                    navigate('/login');
                }}>Login</button>
            </div>
        </div>
        
    )
}