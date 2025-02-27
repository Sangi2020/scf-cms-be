import express from "express";
import 'dotenv/config';
import cors from "cors";
import { app,  server } from './socket/socket.js'

import adminRoutes from './routes/admin/index.route.js';
import webRoutes from './routes/web/index.route.js';


const PORT = process.env.PORT;

app.use(cors("*"));
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// admin routes
app.use("/api/v1/admin", adminRoutes);
app.use('/api/v1/web', webRoutes)

app.get("/", (req, res) => {
  res.send("SCF RUNNING");
});

server.listen(PORT , () => {
  console.log(`Server is running on port  http://localhost:${PORT}`);
});



// <======================================== NOTES START ==============================================>


  //framework :  "express" for server
  // libraries :  "express" for server , "argon2" for password hashing , "jsonwebtoken" for jwt , "prisma" for database
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code: npm start
  // First install all dependencies :- npm intsall
  // Then run the code :- npm start

  // created date : 11-NOV-2024 || created by : Murthasa Ali  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Gurudas P R ||
  // Domain :   || 
  // Hosting :   ||
  // SSL :   ||
  // Database :  || Thasleem

  // Phase summary :   || created date/by :  Ali  || Gurudas P R || Thasleem ||
  // Phase 1 :  SetUps || Gurudas
  // Phase 2 :  Development/ Api Creation| Gurudas || Thasleem
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>