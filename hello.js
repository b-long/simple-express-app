const os = require("os");
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World! <br/>' + 
    'Welcome to a NodeJS application, deploybed by Ansible <br/>' +
    '<img src="./node-logo.png" width="220" height="135" />');
});

// Use port 3000 unless an environment variable (PORT) is set
var port = process.env.PORT || 3000;
var expressHost = process.env.EXPRESSHOST || '0.0.0.0';

app.listen(port, expressHost, function () {
  console.log('Example app listening on "http://' +
  expressHost +
  ':'
  + port + 
  '" ');
});
