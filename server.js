import express from "express";
import 'dotenv/config';
import authRoutes from "./routes/auth.routes.js";

const PORT = process.env.PORT;
const app = express();


app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("SCF RUNNING");
});

app.listen(PORT , () => {
  console.log(`Server is running on port  http://localhost:${PORT}`);
});