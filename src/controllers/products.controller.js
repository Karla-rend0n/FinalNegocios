const Product = require('./../models/products.model');

exports.getAlllProducts = (req, res) => {
  try {
    const products = Product.getAlllProducts();
    res.render('home', {
      products
    });
  } catch (error) {
    throw "Error al traer los productos";
  }
}

exports.updateWishList = (req, res) => {
  const id = req.params.id_product;
  const render = req.query.render;
  Product.updateWishList(id);
  res.redirect(`/book-life${render ? '/'+render : ''}`);
}

exports.renderWishList = (req, res) => {
  const wishList = Product.getWishList();
  res.render('wishList', {
    wishList
  });
}