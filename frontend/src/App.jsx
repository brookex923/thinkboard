import React from 'react'
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import CreatePage from "./pages/CreatePage";
import GalleryPage from "./pages/GalleryPage";
import { Toaster, toast } from 'react-hot-toast';

const App = () => {
  return( 
  
  <div>
    <Toaster />
    <button onClick={() => toast.success('This is a success message!')}>Show Toast</button>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes/:id" element={<NoteDetailPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  </div>
   
)}

export default App
