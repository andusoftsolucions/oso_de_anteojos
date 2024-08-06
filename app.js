const express = require("express");
const path = require('path');
const app = express();
const expressLayaouts = require('express-ejs-layouts');

// Configuración de EJS
app.set('view engine','ejs');
app.use(expressLayaouts);
app.set('views',__dirname+'/views');

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

// Archivos estáticos
app.use(express.static(__dirname + "/public"));


// Rutas
app.get('/', (req, res) => {
    res.render('index', { title: 'Inicio' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});