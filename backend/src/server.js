import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";
dotenv.config();
//const express = require("express");

console.log(process.env.MONGO_URL);

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();



//middleware
if (process.env.NODE_ENV !== 'production'){
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    )
}
app.use((resq, res, next) => {
    console.log('Req Method:', resq.method, ' and Req URL:', resq.url);
    next();
});
app.use(express.json())
app.use(rateLimiter);
app.use('/uploads', express.static('backend/uploads'));

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')));

    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
}

//first connect db and then start the app
connectDB().then(() =>{

    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`);
    });

})
