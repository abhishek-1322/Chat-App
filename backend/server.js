import { connectDB } from "./db/db.js"
import dotenv from "dotenv";
import {server} from "./socket/socket.js";
dotenv.config();

console.log("insiide server.js file")
// =======function to make connection with mongoDB======
connectDB()
// .then(() => {
    
// })
// .catch((error) => {
//     console.log("Error in mongodb connection", error);
//     process.exit(1);
// })