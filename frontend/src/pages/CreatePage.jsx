import React from 'react'

const CreatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-gray-200 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Create a New Note</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 text-gray-800 text-lg shadow-sm"
          />
          <textarea
            placeholder="Write your note here..."
            rows={6}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 text-gray-800 text-base shadow-sm resize-none"
          />
          <div className="flex gap-3 mt-2">
            <button type="submit" className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">Create Note</button>
            <button type="button" className="flex-1 py-3 rounded-xl bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 transition-colors duration-200">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePage
