const express = require('express');
const path = require('path');
const app = express();

// Ensure this is the correct way to import and use fcc-express-bground, or comment it out if it's unnecessary
// const fccExpressBground = require('fcc-express-bground');
// app.use(fccExpressBground());  // Ensure this is correct if it's middleware

// Serve the index.html file on GET request to '/'
app.get('/', (req, res) => {
  const absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Set the port to 3000, or use an alternate port if 3000 is in use
const PORT = process.env.PORT || 3001;  // Change port to 3001 or whatever you prefer

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);  // Exit if there's an error
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
