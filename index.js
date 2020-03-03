/* eslint-disable linebreak-style */
const express = require('express');


const app = express();
app.get('/', (req, res) => {
  res.status(200).send('hello server');
});

// eslint-disable-next-line no-console
var server = app.listen(process.env.PORT || 5000, function() {
  console.log('App listening on port %d in env %s', process.env.PORT || 5000, process.env.NODE_ENV);
 });
 
// eslint-disable-next-line eol-last
module.exports = server;