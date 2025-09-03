import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();
//const express = require("express");

console.log(process.env.MONGO_URL);

const app = express();



//middleware
app.use(cors());
app.use((resq, res, next) => {
    console.log('Req Method:', resq.method, ' and Req URL:', resq.url);
    next();
});
app.use(express.json())
app.use(rateLimiter);
app.use('/uploads', express.static('backend/uploads'));

app.use("/api/notes", notesRoutes);

//first connect db and then start the app
connectDB().then(() =>{

    app.listen(5001, () => {
        console.log("Server started on PORT: 5001");
    });

})
