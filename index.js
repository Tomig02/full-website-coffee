const express = require("express");
const path = require("path")

const server = express();
const port = 3000;

server.use(express.static(__dirname + '/public'));
server.set("views", path.join(__dirname + "/public"))
server.set("view engine", "ejs");

server.get("/", (req, res) => {
    res.render("landing", {logoSvg: __dirname + "/public/media/logo-e.svg"});
})

server.listen(port, () => {
    console.log("listening to port: " + port);
})