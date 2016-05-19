(function(){

  var Service = require('./service'),
      cb = function(req, res, data) {
              console.log('Success: ', data);
              res.json(data);
           };

  function create(req, res) {
  
    Service.create(req, res, cb);
  
  }; //eof create


  function retrieve(req, res) {
  
    Service.retrieve(req, res, cb);
  
  }; //eof retrieve


  function get(req, res) {
  
    Service.get(req, res, cb);
  
  }; //eof get


  function update(req, res) {
  
    Service.update(req, res, cb);
  
  }; //eof update


  function remove(req, res) {
  
    Service.remove(req, res, cb);
  
  }; //eof remove


  var Controller = {
    create:   create,
    retrieve: retrieve,
    get:      get,
    update:   update,
    remove:   remove
  };

  module.exports = Controller;

})()
