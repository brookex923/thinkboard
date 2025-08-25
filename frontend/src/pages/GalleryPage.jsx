import React from 'react'

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-gray-200 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">All Notes</h2>
        <div className="w-full flex flex-col gap-4 mt-4">
          {/* Example note cards, replace with dynamic notes later */}
          <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
            <div className="font-semibold text-lg text-gray-800">Sample Note Title</div>
            <div className="text-gray-500 text-sm">This is a sample note. Your notes will appear here.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryPage
