import { connectDB } from "./db/db.js"
import dotenv from "dotenv";
dotenv.config();

console.log("insiide server.js file")
// =======function to make connection with mongoDB======
connectDB()
