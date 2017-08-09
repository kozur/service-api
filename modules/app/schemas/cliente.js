"use strict";
var mongoose = require("mongoose");
var clienteSchema = new mongoose.Schema({
    cliente_id: String,
    cliente_nombre: String,
    cliente_telefono: String,
    cliente_direccion: {
        direccion_id: String,
        direccion_abrev: String
    }
});
var cliente = mongoose.model('cliente', clienteSchema, 'cliente');
module.exports = cliente;
//# sourceMappingURL=cliente.js.map