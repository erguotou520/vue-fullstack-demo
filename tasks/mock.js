require('shelljs/global')
var path = require('path')
console.log('mv client folder %s to root path %s', path.join(__dirname, '../client/'), path.join(__dirname, '..'))
/* eslint-disable */
mv(path.join(__dirname, '../client/*'), path.join(__dirname, '../'))
rm('-rf', path.join(__dirname, '../client'))
rm('-rf', path.join(__dirname, '../server'))

console.log('Done')
