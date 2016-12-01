/**
 * Main application routes
 */

// 'use strict'
//
// var errors = require('./components/errors')
// var config = require('../config').backend
// var path = require('path')
//
// module.exports = function (app) {
//   // Insert routes below
//   app.use('/api/things', require('./api/thing'))
//   app.use('/api/users', require('./api/user'))
//
//   app.use('/api/auth', require('./auth'))
//
//   // All undefined asset or api routes should return a 404
//   app.route('/:url(api|auth|static)/*').get(errors[404])
//
//   // All other routes should redirect to the index.html
//   if (config.serverFrontend) {
//     console.log('server frontend')
//     app.route('/*').get(function (req, res) {
//       console.log('index.html')
//       res.sendFile(path.join(config.frontend, '/index.html'))
//     })
//   }
// }


var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + '/public'))

// views is directory for all template files
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(request, response) {
  response.render('pages/index');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
