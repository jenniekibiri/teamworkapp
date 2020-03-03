/* eslint-disable linebreak-style */
const express = require('express');


const app = express();
app.get('/', (req, res) => {
  res.status(200).send('hello server');
});

// eslint-disable-next-line no-console
var server = app.listen(5000, () => {
  console.log("Listening on port " + server.address().port + "...");
});
// eslint-disable-next-line eol-last
module.exports = server;