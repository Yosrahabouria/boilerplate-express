const express = require('express');
const path = require('path');
const app = express();

// Serve the index.html file on GET request to '/'
app.get('/', (req, res) => {
  const absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Export the app for use in server.js
module.exports = app;
