const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const itemsRouter = require('./routes/items');
app.use('/api/items', itemsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
