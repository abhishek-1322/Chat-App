import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"]
    }
});

const userSocketMap = {};

io.on('connection', (socket)=>{
    console.log('a user connetced socket: 16======', socket.id);
    const userId =  socket.handshake.query.userId;
    if(userId !== undefined){
        userSocketMap[userId] = socket.id;
    }
    if (userId) {
        socket.join(userId);

        //io.emit is used to send events to all connected clients
        io.emit("getOnlineUsers", Object.keys(userSocketMap));

        socket.on("disconnect", (reason)=>{
            console.log('reason: ', reason);
            console.log("user disconnectv 30", socket.id);
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        })
    }
})

export {app, io, server};