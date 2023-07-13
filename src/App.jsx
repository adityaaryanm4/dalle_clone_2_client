import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { logo } from './assets'

const App = () => {
  return (<BrowserRouter>
    <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-[#e6ebf4]'>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-28 object-contain' />
      </Link>
      <Link to='/create-post'>
        <button className='uppercase bg-[#6469ff] text-white py-2 px-4 rounded-lg font-inter font-medium
        '>create</button>
      </Link>
    </header>
    <main className='min-h-[calc(100vh-73px)] bg-[#f9fafe] sm:p-8 px-4 py-8'>
      {/* w-full ???*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>)
}

export default App