import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiClient from '../config/axios'
import { toast } from 'react-hot-toast'

const CreatePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
        setImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error('Title and body must not be blank.');
      return;
    }
    setLoading(true);
    try {
      const payload = { title, content };
      if (imageData) {
        payload.imageData = imageData;
      }
      await apiClient.post('/api/notes', payload);
      toast.success('Note Created');
      setTitle("");
      setContent("");
      setImage(null);
      setImageData("");
      navigate('/gallery');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to create note.');
      }
      console.error('POST /api/notes error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex flex-col items-center justify-center px-4 transition-all duration-500 ease-in-out">
      <div className="w-full max-w-lg bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col gap-6 border border-gray-200 backdrop-blur-md transition-all duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center transition-all duration-300">Create a New Note</h2>
        <form className="flex flex-col gap-4 transition-all duration-300" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/70 text-gray-800 text-lg shadow-sm transition-all duration-300"
            disabled={loading}
          />
          <textarea
            placeholder="Write your note here..."
            rows={6}
            value={content}
            onChange={e => setContent(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/70 text-gray-800 text-base shadow-sm resize-none transition-all duration-300"
            disabled={loading}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="px-2 py-2 rounded-xl border border-gray-200 bg-white/70 text-gray-800 text-base shadow-sm transition-all duration-300"
            disabled={loading}
          />
          {imageData && (
            <img
              src={imageData}
              alt="Preview"
              className="w-full max-h-64 object-contain rounded-xl mb-2"
            />
          )}
          <div className="flex gap-3 mt-2 transition-all duration-300">
            <button type="submit" disabled={loading} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200 disabled:opacity-60">Create Note</button>
            <button type="button" onClick={handleCancel} disabled={loading} className="flex-1 py-3 rounded-xl bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center text-center disabled:opacity-60">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePage
