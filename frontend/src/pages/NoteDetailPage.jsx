import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const NoteDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
        setNote(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch (error) {
        toast.error('Failed to fetch note.');
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    try {
      await axios.delete(`http://localhost:5001/api/notes/${id}`);
      toast.success('Note Deleted');
      navigate('/gallery');
    } catch (error) {
      toast.error('Failed to delete note.');
    }
  };

  const fadeNavigate = (to) => {
    setFade(false);
    setTimeout(() => navigate(to), 300);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
  if (!note) return <div className="min-h-screen flex items-center justify-center text-gray-400">Note not found.</div>;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col items-center justify-center px-4 transition-all duration-500 ease-in-out ${fade ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
      <div className="w-full max-w-xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-gray-200 backdrop-blur-md mt-12 transition-all duration-500 ease-in-out">
        <button onClick={() => fadeNavigate('/gallery')} className="self-start mb-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors duration-200">&larr; Gallery</button>
        {editMode ? (
          <form className="flex flex-col gap-4 animate-fade-in" onSubmit={async (e) => {
            e.preventDefault();
            if (!title.trim() || !content.trim()) {
              toast.error('Title and body must not be blank.');
              return;
            }
            try {
              await axios.put(`http://localhost:5001/api/notes/${id}`, { title, content });
              toast.success('Note Updated');
              setEditMode(false);
              setNote({ ...note, title, content });
            } catch (error) {
              toast.error('Failed to update note.');
            }
          }}>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 text-gray-800 text-lg shadow-sm transition-all duration-300"
            />
            <textarea
              rows={6}
              value={content}
              onChange={e => setContent(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 text-gray-800 text-base shadow-sm resize-none transition-all duration-300"
            />
            <div className="flex gap-3 mt-2">
              <button type="submit" className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
                onClick={() => setFade(false)}>
                Save
              </button>
              <button type="button" onClick={() => { setEditMode(false); setFade(false); setTimeout(() => setFade(true), 300); }} className="flex-1 py-3 rounded-xl bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 transition-colors duration-200">Cancel</button>
            </div>
          </form>
        ) : (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center transition-all duration-300">{note.title}</h2>
            <p className="text-gray-700 text-lg whitespace-pre-line mb-6 transition-all duration-300">{note.content}</p>
            <div className="flex gap-3 mt-2">
              <button onClick={() => { setEditMode(true); setFade(false); setTimeout(() => setFade(true), 300); }} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">Edit</button>
              <button onClick={async () => { setFade(false); setTimeout(async () => { await handleDelete(); }, 300); }} className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteDetailPage
