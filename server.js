const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/Images', express.static(path.join(__dirname, 'Images')));



// Serve HTML files for specific routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'portfolio.html'));
});

console.log(path.join(__dirname, 'views', 'home.html'));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
