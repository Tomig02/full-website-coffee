const mongoose = require("mongoose");

const BranchSchema = mongoose.Schema({
    img: String,
    name: String,
    dir: String,
    desc: String,
    lat: String,
    lng: String 
}, {collection: "branches"})

module.exports = mongoose.model("Branch", BranchSchema);