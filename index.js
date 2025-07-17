import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import taskRoutes from './routes/tasks.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


app.get("/", (req, res) => {
  res.send("Home Page - API is running ✅");
});


const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/todo'; // Local MongoDB URL

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("Connected to MongoDB");
  });
})
.catch((err) => {
  console.error(" MongoDB connection error:", err);
});
