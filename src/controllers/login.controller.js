const User = require('./../models/users.models');

exports.renderLogin = (req, res) => {
  res.render('login');
}

exports.login = (req, res) => {
  const {
    usuario,
    password
  } = req.body;

  const login = User.loginUser(usuario, password);
  console.log(login);
  if(login == "b") {
    res.redirect('/book-life/crud');
  }else if(login == "a"){
    res.redirect('/book-life');
  }else{
    res.redirect('/book-life/login');
  }
}

exports.renderRegistrer = (req, res) => {
  res.render('registrer');
}

exports.registrer = (req, res) => {
  const data = req.body;
  const user = new User(data.correo, data.password, data.nombres, data.apellidos);
  user.addUser();
  console.log('registro completo');
  res.redirect('/book-life/login');
}