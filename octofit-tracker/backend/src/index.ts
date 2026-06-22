import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { errorHandler, requestLogger } from './middleware/errorHandler';
import userRoutes from './routes/userRoutes';
import workoutRoutes from './routes/workoutRoutes';

dotenv.config();

const app = express();
const BACKEND_PORT = 8000;
const MONGODB_PORT = 27017;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost:${MONGODB_PORT}/octofit-tracker`;

// Middleware
app.use(requestLogger);
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✓ Connected to MongoDB'))
  .catch((err) => console.error('✗ MongoDB connection error:', err));

// Routes
app.use('/api', userRoutes);
app.use('/api', workoutRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Backend is running', 
    port: BACKEND_PORT,
    timestamp: new Date().toISOString()
  });
});

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(BACKEND_PORT, () => {
  console.log(`\n🚀 OctoFit Tracker Backend running on port ${BACKEND_PORT}`);
  console.log(`📊 MongoDB connected to ${MONGODB_URI}`);
  console.log(`✓ All routes initialized\n`);
});
