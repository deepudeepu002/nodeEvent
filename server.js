const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dbConfig = require('./config/database.config');
const eventRoutes = require('./app/routes/event');

const app = express();

app.use(cors()); // Cross-Origin Resource Sharing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes for events
app.use('/api/events', eventRoutes);

// MongoDB connection
mongoose.connect(dbConfig.url)
  .then(() => console.log('Database connected successfully'))
  .catch(err => {
    console.error('Database connection error', err);
    process.exit();
  });

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});