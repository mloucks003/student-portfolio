const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve portfolio files at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on port ${PORT}`);
});
