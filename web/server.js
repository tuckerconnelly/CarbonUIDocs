// A Small Orange hosting uses Node 0.10.0
/* eslint-disable no-var, prefer-arrow-callback, no-console */

var express = require('express')
var path = require('path')

var app = express()

app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(8080, function () {
  console.log('I gotchoo bae. Listening on 8080')
})