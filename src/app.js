const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
require('./db/sqlite'); 
app.get ('/', (req,res) =>{
    res.send("Api is running");
});
app.use(express.json());
app.use(productRoutes);
app.use(orderRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));