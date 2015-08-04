var express = require('express');
var hoganExpress = require('hogan-express');
var _ = require('underscore');
var fs = require('fs');

var app = express();

app.use('/js', express.static(__dirname + '/js'));

app.set('view engine', 'mustache');
app.engine('mustache', hoganExpress);
app.set('views', __dirname + '/templates');

var partials = {}, name = '';
_.forEach(fs.readdirSync('templates'), function(fileName) {
  name = fileName.substr(0, fileName.indexOf('.mustache'));
  partials[name] = name;
});

console.log(partials);
app.set('partials', partials);

var data = require('./js/data');
app.get('/', function (req, res) {
  res.render('index', data);
});

var PORT = 8080;
console.log('listening to http://localhost:' + PORT);
app.listen(8080);
