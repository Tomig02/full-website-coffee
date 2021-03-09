const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    img: String,
    name: String,
    desc: String,
    flavor: String,
    price: String 
}, {collection: "products"})

module.exports = mongoose.model("Product", ProductSchema);