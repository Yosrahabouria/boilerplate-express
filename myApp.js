const express = require('express');
const path = require('path');
const app = express();

// Serve the index.html file on GET request to '/'
app.get('/', (req, res) => {
  // Use __dirname to get the absolute path
  const absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
