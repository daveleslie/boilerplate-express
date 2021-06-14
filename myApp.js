require('dotenv').config()

var express = require('express');
var app = express();

console.log(process.env.MESSAGE_STYLE);

var message = "Hello json";
if (process.env.MESSAGE_STYLE === "uppercase") {
  message = message.toUpperCase();
}

function getTheTime() {
  return new Date().toString();
};

// build simple request logger
app.use("/" , function logger(req, res, next) {
  var logString = req.method + " " + req.path + " - " + req.ip; 
  console.log(logString);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// build time server
app.get("/now", (req, res, next) => {
  req.time = getTheTime();
  next();
}, (req, res) => {
  res.json({"time" : req.time})
});

// build echo server
app.get("/:word/echo", function echo(req, res, next) {
  res.json({"echo" : req.params.word});
});


app.get("/json", (req, res) => {
    res.json({"message" : message});
});

app.use("/public", express.static(__dirname + "/public"));



































 module.exports = app;
