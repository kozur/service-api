"use strict";
var mongoose = require("mongoose");
var servicioSchema = new mongoose.Schema({
    servicio_id: { type: String, required: true },
    usuario: { type: String, required: true },
    servicio_tipo: { type: String, required: true },
    servicio_fecha: { type: Date, required: true },
    servicio_descripcion: { type: String, required: true },
    cliente: {
        cliente_id: { type: String, required: true },
        cliente_nombre: { type: String, required: true }
    }
});
var servicio = mongoose.model('servicio', servicioSchema, 'servicio');
module.exports = servicio;
//# sourceMappingURL=servicio.js.map