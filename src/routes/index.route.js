const express = require('express');
const r = express.Router();
const productsCtrl = require('./../controllers/products.controller');
const loginCtrl = require('./../controllers/login.controller');

module.exports = (app) => {
  app.use('/book-life', r);
  r.get('/', productsCtrl.getAlllProducts);
  
  r.get('/login', loginCtrl.renderLogin);
  r.post('/login', loginCtrl.login);
  r.get('/registrer', loginCtrl.renderRegistrer);
  r.post('/registrer', loginCtrl.registrer);
  r.get('/user', (req, res)=>{
    res.render('user');
  });
  r.get('/user-edit', (req, res)=>{
    res.render('user-edit');
  });
  
  r.get('/contact', (req, res)=>{
    res.render('contact');
  });
  r.get('/crud', (req, res)=>{
    res.render('crud');
  });
  r.get('/mayor', (req, res)=>{
    res.render('mayormenor');
  });
  r.get('/wish-list', productsCtrl.renderWishList);
  r.post('/wish-list/:id_product', productsCtrl.updateWishList)
  r.get('/:id_product', productsCtrl.getProductById);
}