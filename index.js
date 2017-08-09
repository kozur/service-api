"use strict";
//Importar las dependencias
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var requireDir = require("require-dir");
//Importar datos de configuración, como conexión a DB y rutas
var config = require("./config");
//Crear el app Express
var app = express();
mongoose.connect("" + config.connectionStrings.mongoDB_main.host, { auth: config.connectionStrings.mongoDB_main.auth, server: config.connectionStrings.mongoDB_main.server });
mongoose.connection.on('connected', function () {
    console.log('[Mongoose] Conexión OK');
});
mongoose.connection.on('error', function (err) {
    console.log('[Mongoose] No se pudo conectar al servidor');
});
//Configurar el body-parser para permitir parsear a Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Se declaran los métodos permitidos en la API
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization, X - Requested - With');
    // Permitir que el método OPTIONS funcione sin autenticación
    if ('OPTIONS' === req.method) {
        res.send(200);
    }
    else {
        next();
    }
});
//Se cargan los módulos y las rutas
for (var m in config.modules) {
    if (config.modules[m].active) {
        var routes = requireDir(config.modules[m].path);
        for (var route in routes) {
            app.use('/service-api' + config.modules[m].route, routes[route]);
        }
    }
} // Se ejecuta el servidor para que escuche en el puerto 3002
// app.listen(3002, function () {
//     console.log('[API] Escuchando en http://localhost:/3002');
// });
var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("App is running on port " + port);
});
module.exports = app;
//# sourceMappingURL=index.js.map