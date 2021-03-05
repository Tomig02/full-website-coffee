const express = require("express");
const { url } = require("inspector");
const path = require("path")

const server = express();
const port = 3000;

server.use(express.static(__dirname + '/public'));
server.set("views", path.join(__dirname + "/public"))
server.set("view engine", "ejs");
 
server.get("/", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/landingPage.ejs"});
})

server.listen(port, () => {
    console.log("listening to port: " + port);
})