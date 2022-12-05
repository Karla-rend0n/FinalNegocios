const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../', 'data', 'products.json');

class Product {
  id;
  title;
  subtitle;
  price;
  img;
  
  constructor(title, subtitle, price, img) {
    this.title = title;
    this.subtitle = subtitle;
    this.price = price;
    this.img = img;
    this.id = uuidv4();
  }

  static getAlllProducts() {
    try {
      const productsTxt = fs.readFileSync(dataPath);
      const products = JSON.parse(productsTxt);
      return products;
    } catch (error) {
      throw "Error al traer la info"
    }
  }

  static updateWishList(id) {
    const productsTxt = fs.readFileSync(dataPath);
    const products = JSON.parse(productsTxt);
    for (const product of products) {
      if(product.id === id) {
        product.wishList = !product.wishList;
      }
    }
    fs.writeFileSync(dataPath, JSON.stringify(products));
  }

  static getWishList() {
    const productsTxt = fs.readFileSync(dataPath);
    const products = JSON.parse(productsTxt);

    const wishList = products.filter(p => p.wishList);
    return wishList;
  }
}

module.exports = Product;