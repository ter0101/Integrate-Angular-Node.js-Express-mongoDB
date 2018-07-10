const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongoose');

//set up express app
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

//connect mongodb
mongodb.connect('mongodb://localhost/library');
mongodb.Promise = global.Promise;

//initialize routes
app.use('/api', require('./server/api.js'));
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('Server is runnubg.. at port: 4000')
});
