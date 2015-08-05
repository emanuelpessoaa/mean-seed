var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({

    username: { type: String, index: { unique: true }, default: '' },
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    age: { type: Number, default: ''}
});

module.exports = mongoose.model('User', UsersSchema);
