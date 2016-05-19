var mongoose        = require('mongoose'),
    modelName       = 'User',
    collectionName  = 'users';


var Schema = mongoose.Schema;

var schema = new Schema(require('./schema'));

var Model = mongoose.model(modelName, schema, collectionName);

module.exports = Model;
