import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const BACKEND_PORT = 8000;
const MONGODB_PORT = 27017;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:${MONGODB_PORT}/octofit-tracker`;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running', port: BACKEND_PORT });
});

// Start Server
app.listen(BACKEND_PORT, () => {
  console.log(`OctoFit Tracker Backend running on port ${BACKEND_PORT}`);
  console.log(`MongoDB connected to ${MONGODB_URI}`);
});
