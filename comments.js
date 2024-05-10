// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a route for getting comments
// 4. Start the server on port 3000

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'Beth', text: 'I love cats!' },
    { id: 2, author: 'Joel', text: 'I love dogs!' }
  ]);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Run this file with node comments.js
// Visit http://localhost:3000/comments in your browser to see the comments