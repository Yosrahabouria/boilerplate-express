import express from 'express';
import { join } from 'path';
const app = express();

// Serve the index.html file on GET request to '/'
app.get('/', (req, res) => {
  const absolutePath = join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Export the app for use in server.js
export default app;
