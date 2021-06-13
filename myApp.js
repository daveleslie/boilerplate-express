var express = require('express');
var app = express();

console.log('Hello World');

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

var message = "Hello json";
if (process.env.MESSAGE_STYLE = "uppercase") {
  message = message.toUpperCase();
}

app.get("/json", (req, res) => {
    res.json({"message" : message});
});

app.use("/public", express.static(__dirname + "/public"))


































 module.exports = app;
