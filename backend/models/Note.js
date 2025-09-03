import mongoose from "mongoose";

// 1. Create a schema 


//2. Create model based on the schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: ''
    },
    imageData: {
        type: String,
        default: ''
    },
}, { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;