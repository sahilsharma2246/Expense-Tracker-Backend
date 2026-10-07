const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Register API Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/trans', require('./routes/transRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});