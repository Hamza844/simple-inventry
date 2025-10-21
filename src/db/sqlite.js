const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.sqlite');
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL CHECK(price > 0),
      quantity INTEGER NOT NULL CHECK(quantity >= 0)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      productId INTEGER NOT NULL,
      quantityOrdered INTEGER NOT NULL CHECK(quantityOrdered > 0),
      orderDate TEXT NOT NULL,
      FOREIGN KEY(productId) REFERENCES products(id)
    )
  `);
});
module.exports = db;