(function(){

  var Model = require('./model'),
      showError = function(err) {
        console.log('Error: ', err);
        res.json('Error: ', err);
    };

  function create(req, res, cb) {
    
    var data = req.body, newModel = new Model(data);

    newModel.save(function (err, data) {
    
      err ? showError(err) : cb(req, res, data);
      
    });
    
  };//eof create


  function retrieve(req, res, cb) {
    
    var query = {};
    
    Model.find(query, function (err, data) {

      err ? showError(err) : cb(req, res, data);      

    });
    
  };//eof retrieve


  function get(req, res, cb) {

    var query = {_id: req.params.id} ;
    
    Model.findOne(query, function (err, data) {
      
      err ? showError(err) : cb(req, res, data);
      
    });
  };//eof get
 
 
  function update(req, res, cb) {

    var query = {_id: req.params.id},
        mod = req.body,
        optional = {
          upsert: false,
          multi: false
        };

    Model.update(query, mod, function (err, data) {
      err ? showError(err) : cb(req, res, data);
    });

  };//eof update


  function remove(req, res, cb) {

    var query = {_id: req.params.id};

    Model.remove(query, function(err, data) {
      
      err ? showError(err) : cb(req, res, data);
      
    });

  };//eof remove
  

  var Service = {
    create:   create,
    retrieve: retrieve,
    get:      get,
    update:   update,
    remove:   remove
  };
  
  module.exports = Service;
  
})()