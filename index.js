const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use(express.urlencoded({extended: false}));

require('./src/routes/index.route')(app);
app.use((req, res)=> {
  res.redirect("/book-life/login");
});

app.listen(3000, () => console.log('SERVIDOR CORRIENDO CORRECTAMENTE!'));
