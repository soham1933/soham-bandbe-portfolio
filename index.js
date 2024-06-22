const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the React app's dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all handler to serve the React app for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
