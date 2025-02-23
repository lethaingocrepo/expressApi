const express = require('express');
const router = express.Router();

let items = [];

router.get('/', (req, res) => {
  res.json(items);
});

router.post('/', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json({ message: 'Item created', item: newItem });
});

router.get('/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.put('/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items[index] = req.body;
    res.json({ message: 'Item updated', item: items[index] });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.delete('/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json({ message: 'Item deleted', item: deletedItem });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

module.exports = router;
