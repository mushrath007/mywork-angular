'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan'); // formerly express.logger
var errorhandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'docs')));


// development only
if ('development' === app.get('env')) {
  app.use(errorhandler());
}

http.createServer(app).listen(app.get('port'), function () {
	console.log('com.td.oca.examplePersonal documentation server listening on port ' + app.get('port'));
});
