import express from 'express';
import connectDB from '../config/db.js';
import dotenv from 'dotenv';
import route from '../routes/route.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// Connect to MongoDB
connectDB();
// Middleware
app.use(express.json());
app.use('/api', route);
// Start the server
app.listen(port, () => {
    console.log("Server is running on port " + port);
});