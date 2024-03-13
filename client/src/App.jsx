import {BrowserRouter, Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Todo from './Pages/Todo'
import HeaderComp from './Components/header'

function App() {
  
  return (
    <div className="bg-blue-300 min-h-screen">
      <BrowserRouter>
      <HeaderComp/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
