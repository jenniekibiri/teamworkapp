/* eslint-disable linebreak-style */
const express = require('express');

const {Client} = require('pg');
const app = express();
const connectionString ='postgres://postgres:5463@localhost:5432/teamwork';
const client = new Client({
    connectionString:connectionString
});
client.connect();

app.get('/', (req, res) => {
  res.status(200).send('hello server');
});

app.get('/feed', (req,res) => {
  client.query('SELECT * FROM articles, gifs', (err, result) => 
{
  if (err) throw err;
    res.send(result.rows);

    console.log(result);
    //console.log(typeof result.rows)
})

})
// eslint-disable-next-line no-console
var server = app.listen(process.env.PORT || 5000, function() {
  console.log('App listening on port %d in env %s', process.env.PORT || 5000, process.env.NODE_ENV);
 });
 
// eslint-disable-next-line eol-last
module.exports = server;