
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var port = process.env.PORT || 4200;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(express.static(__dirname + '/../dist'));

require('./mocks/token.js')(app);

app.get('*', function(req, res) {
  res.sendFile(path.resolve("dist/index.html")); // load our public/index.html file
});

app.listen(port, function () {
  console.log('Example app listening on port 4200!');
});

exports = module.exports = app;
