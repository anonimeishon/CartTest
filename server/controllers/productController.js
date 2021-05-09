const pool = require("../util/db");

const getAllProducts = async (req, res) => {
    try {
    const data = await pool.query("SELECT * FROM products");
    res.json(data.rows)}
    catch{
        res.status(500).json({message: 'Problem with the server'})
    }
};

module.exports = {
    getAllProducts
}