const db = require('../db/sqlite');

exports.createOrder = (req, res) => {
  const { productId, quantityOrdered } = req.body;
  if (!productId || !quantityOrdered) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  db.get('SELECT * FROM products WHERE id = ?', [productId], (err, product) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (product.quantity < quantityOrdered) {
      return res.status(400).json({ error: 'Insufficient stock for this product' });
    }

    const orderDate = new Date().toISOString();
    db.run(
      'INSERT INTO orders (productId, quantityOrdered, orderDate) VALUES (?, ?, ?)',
      [productId, quantityOrdered, orderDate],
      function (err) {
        if (err) return res.status(500).json({ error: err.message });

        db.run(
          'UPDATE products SET quantity = quantity - ? WHERE id = ?',
          [quantityOrdered, productId],
          (err2) => {
            if (err2) return res.status(500).json({ error: err2.message });
            res.status(201).json({
              id: this.lastID,
              productId,
              quantityOrdered,
              orderDate,
            });
          }
        );
      }
    );
  });
};

exports.getAllOrders = (req, res) => {
  db.all('SELECT * FROM orders', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};