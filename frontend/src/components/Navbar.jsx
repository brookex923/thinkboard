import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 border-b border-gray-200 shadow-sm backdrop-blur-md">
        <Link to="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">ThinkBoard</Link>
        <div>
          <Link to="/create" className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200">+ Create Note</Link>
        </div>
      </nav>
    </div>
  )
}

export default App
