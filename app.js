const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

const app = express();

/* 
    Leer configuracion de env
*/
const pathEnv = path.resolve(__dirname, './.env');
if (!fs.existsSync(pathEnv)) {
    console.log("ERROR:", "It's required an env file.");
    process.exit(1);
}
dotenv.config({
    path: pathEnv
});

/* 
    Configuracion de vistas con el motor de plantillas handlebars
*/
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

/* 
    Lectura de rutas
*/
app.use(require('./server/routes/index'));

/* 
    Iniciar servidor
*/
app.listen(process.env.PORT, err => err ? console.log(err) : console.log("SUCCESS:", "Server on port " + process.env.PORT));