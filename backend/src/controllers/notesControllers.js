import Note from "../../models/Note.js";

export async function getAllNotes(req, res){
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }
    catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });
    }    
}

export async function getNoteById(req, res) {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: `Note with id ${id} not found` });
        }
        res.json(note);
    }
    catch (error) {
        console.error("Error fetching note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createNote(req, res){
    try{
        const { title, content, imageData } = req.body;
        const newNote = new Note({ title, content, imageData });
        await newNote.save();
        res.status(201).json(newNote);
    }
    catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function updateNote(req, res){
    try {
        const { id } = req.params;
        const { title, content, imageData, removeImage } = req.body;
        let updateFields = { title, content };
        if (typeof imageData === 'string') {
            updateFields.imageData = imageData;
        } else if (removeImage === 'true') {
            updateFields.imageData = '';
        }
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            updateFields,
            { new: true }
        );
        res.status(200).json(updatedNote);
    }
    catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};   

export async function deleteNote(req, res){
    try{
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: `Note with id ${id} not found` });
        }
        res.status(200).json({ message: `Note with id ${id} deleted` });
    }
    catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ message: "Internal server error" });
    }   
};
