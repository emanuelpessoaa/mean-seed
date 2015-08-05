/**
 * 
 * Module Users - Controller
 * 
 */

var User = require("./model.js");

var Controller = {
  
  create: function(req, res) {
    var dados = req.body;
    var model = new User(dados);

    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Usuário inserido: ', data);
        res.json(data);
      }
    });
  },
  
  retrieve: function(req, res) {
    var query = {};
    User.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Usuários listados: ', data);
        res.json(data);
      }
    });
  },
  
  get: function(req, res) {
    var query = {_id: req.params.id};
    User.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Usuário listado: ', data);
        res.json(data);
      }
    });
  },
  
  update: function(req, res) {
    var query = {_id: req.params.id};
    var mod = req.body;

    User.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Usuário alterado: ', data);
        res.json(data);
      }
    });
  },
  
  delete: function(req, res) {
    var query = {_id: req.params.id};

    User.remove(query, function(err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json('Erro: ' + err);
      }
      else{
        console.log('Usuário deletado: ', data);
        res.json(data);
      }
    });
  },
  
  renderList: function(req, res) {

    var query = {};
    User.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.render('users/error', { error: err });
      }
      else{
        console.log('Usuários listados: ', data);
        res.render('users/index', {
          title: 'Listagem dos Usuários',
          users: data
        });
      }
    });
  },
  renderGet: function(req, res) {

    var query = {_id: req.params.id};
    User.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.render('users/error', { error: err });
      }
      else{
        console.log('Usuário consultado: ', data);
        res.render('users/get', {
          title: 'Usuários ' + data.name,
          movie: data
        });
      }
    });
  },
  renderCreate: function(req, res) {
    res.render('users/create');
  },
  renderUpdate: function(req, res) {

    var query = {_id: req.params.id};
    User.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.render('users/error', { error: err });
      }
      else{
        console.log('Usuário alterado: ', data);
        res.render('users/update', { 
          title: 'Usuário ' + data.name,
          movie: data
        });
      }
    });
  },
  renderRemove: function(req, res) {

    var query = {_id: req.params.id};
    User.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.render('users/error', { error: err });
      }
      else{
        console.log('Usuário removido: ', data);
        res.render('users/remove', {
          title: 'Remove Usuário ' + data.name,
          movie: data
        });
      }
    });
  }
};

module.exports = Controller;