import { Server } from "socket.io";
import http from "http";
import express from "express";

// Initialize express app
const app = express();

// Create HTTP server and pass express app into it
const server = http.createServer(app);

// Initialize Socket.IO server with necessary CORS options
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "https://scf-cms-web-orcin.vercel.app","https://scf-cms-web-zeta.vercel.app","https://scf-cms-web-six.vercel.app","https://tl-scf-web-k6h3.vercel.app/","https://tl-scf-strategies-enhancement.vercel.app/","https://scf-cms-web-six.vercel.app","https://tl-scf-web-new.vercel.app"], 
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);


  socket.emit("welcome", { message: "Welcome to the server!" });


  socket.on("send-message", (data) => {
    console.log("Message from client:", data);
    io.emit("new-message", data);
  });

  // Handle disconnection of clients
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});


export { app, io, server };