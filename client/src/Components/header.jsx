import { Link } from 'react-router-dom'
export default function HeaderComp() {
  return (
  <header className="bg-violet-300 shadow-md">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to='/'>
        <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
          <span className='text-blue-500'>To</span>
          <span className='text-blue-950'>Do</span>          
        </h1>
      </Link>
      <ul className='flex gap-4 '>
                <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to='signup'>
                <li className='sm:inline text-slate-700 hover:underline'>SignUp</li>
                </Link>
            </ul>
    </div>
  </header>
  )
}
