
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import express from "express";

import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";
import {app, server} from "./socket/socket.js";
import { connectDB } from "./db/db.js";

connectDB()
console.log("55",process.env.CORS_ORIGIN);
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
//take data fromthe json body
app.use(express.json({limit: "50mb"}));
//take data from the url
app.use(express.urlencoded({limit: "50mb", extended: true}));
//take data from the cookie
app.use(cookieParser());

app.use(bodyParser.json({limit: "50mb"}));

app.use(express.static("public"));


app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

server.listen(process.env.PORT || 8000, () => {
    console.log("App is running on port ", process.env.PORT || 8000);
})