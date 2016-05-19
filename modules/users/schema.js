var mongoose = require('mongoose'), 
_schema = {
    username: { type: String, index: { unique: true }},
    firstname: { type: String},
    lastname: { type: String },
    age: { type: Number}
};
  
module.exports = _schema;
