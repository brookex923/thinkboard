import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const GalleryPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error('Failed to fetch notes. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  // Filter notes by title based on search input (case-insensitive)
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col px-0 transition-all duration-500 ease-in-out">
      <header className="w-full flex items-center justify-between px-0 py-6 bg-white/80 border-b border-gray-200 shadow-sm backdrop-blur-md mb-8 transition-all duration-500 ease-in-out">
        <div className="flex-1 flex items-center transition-all duration-300">
          <Link to="/" className="text-4xl font-extrabold text-blue-600 tracking-tight pl-8 transition-all duration-300">ThinkBoard</Link>
        </div>
        <div className="flex-1 flex justify-end pr-8 transition-all duration-300">
          <Link to="/create" className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform duration-200">+ Create Note</Link>
        </div>
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto transition-all duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 transition-all duration-300">All Notes</h2>
        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search notes by title..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 bg-white text-gray-700"
          />
        </div>
        {loading ? (
          <div className="text-center text-gray-500 transition-all duration-300">Loading...</div>
        ) : isRateLimited ? (
          <div className="text-center text-red-500 transition-all duration-300">You are being rate limited. Please try again later.</div>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center text-gray-400 transition-all duration-300">No notes found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {filteredNotes.map(note => (
              <Link key={note._id} to={`/notes/${note._id}`} className="bg-white rounded-xl shadow p-5 flex flex-col gap-2 border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer no-underline">
                <div className="font-semibold text-lg text-gray-800">{note.title}</div>
                <div className="text-gray-500 text-sm">{note.content}</div>
                {note.imageUrl && (
                  <img src={`http://localhost:5001${note.imageUrl}`} alt="Note" className="w-full max-h-48 object-contain rounded-xl mb-2" />
                )}
                {note.imageData && (
                  <img
                    src={note.imageData}
                    alt="Note"
                    className="w-full max-h-48 object-contain rounded-xl mb-2"
                  />
                )}
                {note.createdAt && (
                  <div className="text-xs text-gray-400 mt-2">{new Date(note.createdAt).toLocaleString()}</div>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default GalleryPage
