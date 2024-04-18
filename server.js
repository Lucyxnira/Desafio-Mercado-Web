const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Plantillas Handlebars
app.engine('.handlebars', exphbs.engine({ extname: '.handlebars' }));
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos (Bootstrap, jQuery)
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Productos y sus imagenes
const productos = [
  { nombre: "Banana", imagen: "/assets/img/banana.png" },
  { nombre: "Cebollas", imagen: "/assets/img/cabollas.png" },
  { nombre: "Pimentón", imagen: "/assets/img/pimenton.png" },
  { nombre: "Papas", imagen: "/assets/img/papas.png" },
  { nombre: "Lechugas", imagen: "/assets/img/lechuga.png" },
  { nombre: "Tomates", imagen: "/assets/img/tomate.png" }
];
  
// Ruta raíz que renderiza la vista del Dashboard
app.get('/', (req, res) => {
  res.render('dashboard', { productos });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

