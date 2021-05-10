const pool = require("../util/db");

const getAllProducts = async (req, res) => {
    try {
    const data = await pool.query("SELECT * FROM products");
    res.json(data.rows)}
    catch{
        res.status(500).json({message: 'Problem with the server'})
    }
};

const buyProducts = async (req, res) =>{
    try{
            const data = await pool.query("UPDATE products SET product_stock = $1 WHERE product_id = $2",
            [req.body.count, req.body.id]
        )
        res.json("Sold!");
    }catch{
        res.status(400).json({message: 'Problem with the purchase'})
    }
}

module.exports = {
    getAllProducts,
    buyProducts
}