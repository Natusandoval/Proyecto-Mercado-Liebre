const express = require ("express");
const path = require ("path");
const app = express ();

const publicPath = path.resolve (__dirname, "./public");
app.use(express.static (publicPath));

app.listen (process.env.port || 3000, function () {console.log ("Servicor corriendo en el puerto 3000")});

app.get ("/", function (req, res) {res.sendFile (path.resolve (__dirname, "./views/home.html"))})

app.get ("/register", function (req, res) {res.sendFile (path.resolve (__dirname, "./views/register.html"))})

app.get ("/login", function (req, res) {res.sendFile (path.resolve (__dirname, "./views/login.html"))})