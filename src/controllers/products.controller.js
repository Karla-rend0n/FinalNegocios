const Product = require('./../models/products.model');

exports.getAlllProducts = (req, res) => {
  const tipoLibro = req.query.tipo;
  const catLibro = req.query.categoria;
  try {
    const products = Product.getAlllProducts(tipoLibro,catLibro);
    res.render('home', {
      products
    });
  } catch (error) {
    throw "Error al traer los productos";
  }
}

exports.getProductById = (req, res) => {
  const id = req.params.id_product;
  try {
    const product = Product.getProductById(id);
    console.log('ID', id);
    res.render('product_detail', {
      product
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
  console.log("dedededdededededededdededede")
  const wishList = Product.getWishList();
  console.log(wishList)
 
  res.render('wishList', {
    wishList
  });
}