import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/task.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", taskRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "Go to /api/task to get all tasks",
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
