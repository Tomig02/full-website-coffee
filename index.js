const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv/config")

const Branch = require("./schema/branch");
const Product = require("./schema/product");

const server = express();

// set public folder for static and dinamyc content
server.use(express.static(__dirname + '/public'));
server.set("views", path.join(__dirname + "/public"));
server.set("view engine", "ejs");
 
// MIDDLEMAN
server.use(express.json());
server.use(express.urlencoded({
    extended: true
}))

// MongoDB Atlas connection with mongoose
mongoose.connect(process.env.MONGO_AUTH, {useNewUrlParser: true, useUnifiedTopology: true});

// wait for connection to get data of coffee shops from database when inside placesPage.js
const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", () => {
    console.log("db connected");
});


// server routes
server.get("/", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/pages/landingPage.ejs"});
});

let products;
server.get("/cafe", async (req, res) => {
    try{
        if(!products){
            products = await Product.find();
        } 
    }
    catch(err){
        console.log(err.errorText);
    }
    res.render("mainSite", {
        page: __dirname + "/public/pages/coffeePage.ejs",
        products: products
    });
});

server.get("/conocenos", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/pages/aboutUs.ejs"})
});

server.get("/contacto", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/pages/contactPage.ejs"})
});

let branches;
server.get("/sucursales", async (req, res) => {
    try{
        if(!branches){
            branches = await Branch.find();
        } 
    }
    catch(err){
        console.log(err);
    }
    res.render("mainSite", {
        page: __dirname + "/public/pages/placesPage.ejs",
        branches: branches
    });
});

server.post("/send-form", (req, res) => {
    console.log(req.body);
    res.end();
});

// connection
const port = 3000;
server.listen(port, () => {
    console.log("listening to port: " + port);
});