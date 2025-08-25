import React from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col items-center px-4">
      <Navbar />
      <div className="w-full max-w-xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 border border-gray-200 backdrop-blur-md mt-12">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-2">ThinkBoard</h1>
        <p className="text-lg text-gray-500 mb-6 text-center">Capture your thoughts, ideas, and reminders in a beautiful, minimal space.</p>
        <div className="flex gap-4">
          <Link to="/create" className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">+ New Note</Link>
          <Link to="/gallery" className="px-6 py-3 rounded-xl bg-gray-200 text-gray-700 font-semibold shadow-lg hover:bg-gray-300 transition-colors duration-200">Gallery</Link>
        </div>
        <div className="w-full flex flex-col gap-4 mt-8">
          {/* Example note cards, replace with dynamic notes later */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className="font-semibold text-lg text-gray-800">Welcome to your notes app!</div>
            <div className="text-gray-500 text-sm">Click + New Note to get started.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
