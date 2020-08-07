var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var useragent = require('express-useragent');

var cors = require("cors")

//define known routes here
var router = {"/api/testAPI": require("./routes/testAPI"),
  "/api/reddit/popular": require("./routes/Reddit/Popular-Feed")};

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.use(useragent.express());

//serve routes based URL
Object.keys(router).forEach(key => {
  app.use(key, router[key]);
});

//any unknown routes return the home page
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
