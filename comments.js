// Create web server
// 1. Import dependencies
// 2. Create an instance of the express server
// 3. Define routes
// 4. Start server

// 1. Import dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// 2. Create an instance of the express server
const app = express();

// 3. Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/comments', (req, res) => {
  fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
    if (err) {
      res.status(500).send('An error occurred');
    } else {
      const comments = JSON.parse(data);
      res.json(comments);
    }
  });
});

// 4. Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});