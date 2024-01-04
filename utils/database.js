var mongoose = require('mongoose');
//add database
mongoose.connect('mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME, {});

var db = mongoose.connection;

db.on('error', function (err) {
  console.error('MongoDB connection error:', err);
});

db.once('open', function () {
  console.log('Connection with database succeeded.');
});
