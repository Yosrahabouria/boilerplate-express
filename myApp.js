let express = require('express');
let path = require('path');  // Include path module to handle file paths
let app = express();

app.get('/', (req, res) => {
  // Use __dirname to get the absolute path
  const absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});


