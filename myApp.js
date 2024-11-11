let express = require('express');
let path = require('path');  // Include path module to handle file paths
let app = express();

// Serve the index.html file when accessing the root URL
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));  // Use path.join for platform-independent paths
});


