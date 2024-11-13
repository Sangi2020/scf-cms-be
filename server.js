import express from "express";
import 'dotenv/config';

// admin routes
import authRoutes from "./routes/admin/auth.routes.js";
import adminBlogRoutes from "./routes/admin/blog.routes.js";
import adminEnquiriesRoutes from "./routes/admin/enquiries.routes.js";
import adminContentsRoutes from "./routes/admin/contents.routes.js";
import adminTeamRoutes from "./routes/admin/team.routes.js";
import adminQnaRoutes from "./routes/admin/qna.routes.js";
import adminClientRoutes from "./routes/admin/client.routes.js";
import adminCatalogueRoutes from "./routes/admin/catalogue.routes.js";

// web routes
import webBlogRoutes from "./routes/web/blog.routes.js";
import webEnquiriesRoutes from "./routes/web/enquiries.routes.js";
import webContentsRoutes from "./routes/web/contents.routes.js";
import webTeamRoutes from "./routes/web/team.routes.js";
import webQnaRoutes from "./routes/web/qna.routes.js";
import webClientRoutes from "./routes/web/client.routes.js";
import webCatalogueRoutes from "./routes/web/catalogue.routes.js";
const PORT = process.env.PORT;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// admin routes
app.use("/api/v1/admin/auth", authRoutes);
app.use("/api/v1/admin/blog", adminBlogRoutes);
app.use("/api/v1/admin/team", adminTeamRoutes);
app.use("/api/v1/admin/client", adminEnquiriesRoutes);
app.use("/api/v1/admin/contents", adminContentsRoutes);
app.use("/api/v1/admin/client", adminClientRoutes);
app.use("/api/v1/admin/qna", adminQnaRoutes);
app.use("/api/v1/admin/catalogue", adminCatalogueRoutes);


//web routes

app.use("/api/v1/web/blog", webBlogRoutes);
app.use("/api/v1/web/team", webTeamRoutes);
app.use("/api/v1/web/client", webEnquiriesRoutes);
app.use("/api/v1/web/contents", webContentsRoutes);
app.use("/api/v1/web/client", webClientRoutes);
app.use("/api/v1/web/qna", webQnaRoutes);
app.use("/api/v1/web/catalogue", webCatalogueRoutes);




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