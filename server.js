const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Welcome to MVC + Service Layer API with Numeric IDs'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
