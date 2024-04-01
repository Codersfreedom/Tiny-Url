import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path, { dirname } from "path";

import connectDB from "./db.js";
import UrlRoutes from "./routes/UrlRoutes.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cors());
dotenv.config();


app.use("/",UrlRoutes);
app.use(express.static(path.join(__dirname,"client/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"client","dist","index.html"));
})

const port = process.env.PORT || 4000

app.listen(port,()=>{
    connectDB()
    console.log(`Server is running at http://localhost:${port}`)
})
