const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Validate username and password
  // This is just an example, you should use a real user validation
  if (username === 'user' && password === 'password') {
    const user = { name: username };
    const accessToken = jwt.sign(user, 'your-secret-key', { expiresIn: '1h' });
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
});

module.exports = router;
