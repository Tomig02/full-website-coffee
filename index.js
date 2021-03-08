const express = require("express");
const { url } = require("inspector");
const path = require("path");

const server = express();
const port = 3000;

server.use(express.static(__dirname + '/public'));
server.set("views", path.join(__dirname + "/public"));
server.set("view engine", "ejs");
 
server.use(express.urlencoded({
    extended: true
}))


server.get("/", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/landingPage.ejs"});
});

server.get("/cafe", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/coffeePage.ejs"})
});

server.get("/conocenos", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/aboutUs.ejs"})
});

server.get("/contacto", (req, res) => {
    res.render("mainSite", {page: __dirname + "/public/contactPage.ejs"})
});

server.post("/send-form", (req, res) => {
    console.log(req.body);
    res.json({
        name: req.body.name,
        surname: req.body.surname
    });
});


server.listen(port, () => {
    console.log("listening to port: " + port);
});