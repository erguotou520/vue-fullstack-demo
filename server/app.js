/**
 * Main application file
 */

// 'use strict'
//
// // Set default node environment to development
// process.env.NODE_ENV = process.env.NODE_ENV || 'development'
//
// var express = require('express')
// var mongoose = require('mongoose')
// var config = require('../config').backend
//
// // Connect to database
// mongoose.connect(config.mongo.uri, config.mongo.options)
//
// // insure DB with admin user data
// require('./config/seed')
//
// // Setup server
// var app = express()
// var server = require('http').createServer(app)
// var socketio = require('socket.io')(server)
// require('./config/socketio')(socketio)
// require('./config/express')(app)
// require('./routes')(app)
//
// // Start server
// server.listen(config.port, function () {
//   console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
// })
//
// // Expose app
// exports = module.exports = app
//
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
