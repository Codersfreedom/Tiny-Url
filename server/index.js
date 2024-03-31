import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db.js";
import UrlRoutes from "./routes/UrlRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();


app.use("/",UrlRoutes);


const port = process.env.PORT || 4000

app.listen(port,()=>{
    connectDB()
    console.log(`Server is running at http://localhost:${port}`)
})
