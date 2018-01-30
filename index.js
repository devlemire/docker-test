const express = require('express');
const Path = require('path');

const app = express();

app.use( express.static( __dirname + '/build/') );
app.get( '*', ( req, res, next ) => {
  res.sendFile( Path.resolve( __dirname + '/build/index.html' ) );
});

app.listen( 3000, () => console.log('Server listening on port 3000') );