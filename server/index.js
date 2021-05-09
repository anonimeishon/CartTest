const express = require("express");
const cors = require("cors");
const app = express();
const productController = require("./controllers/productController");
app.use(cors())
app.use(express.json())

app.get('/api/get-products', productController.getAllProducts)

app.listen(5001);
console.log('Listening in port 5001')
