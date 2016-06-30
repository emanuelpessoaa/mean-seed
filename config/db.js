var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-seed');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Connection Error! ', err)
});
db.on('open', function () {
  console.log('Connection Open...')
});
db.on('connected', function(err){
    console.log('Connected')
});
db.on('disconnected', function(err){
    console.log('Disconnected')
});

module.exports = db;
