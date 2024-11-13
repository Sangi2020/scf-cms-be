import express from "express";
import 'dotenv/config';
import authRoutes from "./routes/auth.routes.js";
import blogRoutes from "./routes/blog.routes.js";
import enquiriesRoutes from "./routes/enquiries.routes.js";
import contentsRoutes from "./routes/contents.routes.js";
import privacyPolicyRoutes from "./routes/contents.routes.js";
import teamRoutes from "./routes/team.routes.js";
const PORT = process.env.PORT;
const app = express();


app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blog", blogRoutes);
app.use("/api/v1/enquiries", enquiriesRoutes);
app.use("/api/v1/contents", contentsRoutes);
app.use("/api/v1/privacy-policy", privacyPolicyRoutes);
app.use("/api/v1/team", teamRoutes);

app.get("/", (req, res) => {
  res.send("SCF RUNNING");
});

app.listen(PORT , () => {
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
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/ Api Creation|
  // Phase 3 :  Production  ||

  // <======================================== NOTES END ==============================================>