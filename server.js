import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Required for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// MongoDB
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
