'use strict';

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan'); // formerly express.logger
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');
var mockAPI = require('td-core-mock-api');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(methodOverride());

app.use(express.static(path.join(__dirname, 'public')));

/**
 * The mockAPI will search your 'mock-data' directory and respond with it if it's found.  If it's not found it will
 * try and fulfill the request from its data set.
 */
app.use(mockAPI(path.join(__dirname, 'mock-data')));

// development only
if ('development' === app.get('env')) {
  app.use(errorhandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function () {
	console.log('com.td.oca.examplePersonal server listening on port ' + app.get('port'));
});

module.exports = {
  uri: 'http://localhost:' + app.get('port')
};
