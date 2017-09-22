const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World!')
})

const server = app.listen(3000, function() {
  console.log('WhiteBox API Server listening ...');
})
