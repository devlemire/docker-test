const express = require('express');
const Path = require('path');
const cors = require('cors');
const massive = require('massive');

const app = express();

massive({
  host: 'postgres',
  port: 5432,
  database: 'docker_db',
  user: 'james',
  password: 'swag1234'
}).then( db => {
  console.log('@@@@@@ DB SUCCESSFULLY CONNECTED! @@@@@@');
  app.set('db', db);
  db.run('SELECT COUNT(*) FROM cars').then( data => console.log( data ) );
  db.run('SELECT COUNT(*) FROM trucks').then( data => console.log( data ) );
}).catch( err => console.error( err ) );

app.use( cors() );

app.get('/api/cars', ( req, res, next ) => {
  const db = app.get('db');
  db.run('SELECT COUNT(*) FROM cars').then( data => {
    res.status(200).send( data[0] );
  });
});

app.get('/api/trucks', ( req, res, next ) => {
  const db = app.get('db');
  db.run('SELECT COUNT(*) FROM trucks').then( data => {
    res.status(200).send( data[0] );
  });
});

app.use( express.static( __dirname + '/build/' ) );
app.get( '*', ( req, res, next ) => {
  res.sendFile( Path.resolve( __dirname + '/build/index.html' ) );
});

app.listen( 3001, () => console.log('Server listening on port 3000') );