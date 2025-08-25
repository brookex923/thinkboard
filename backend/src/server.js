import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
//const express = require("express");

console.log(process.env.MONGO_URL);

const app = express();

connectDB();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});


