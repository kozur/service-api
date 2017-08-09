import * ​ ​as ​ mongoose from 'mongoose';
let servicioSchema = new mongoose.Schema({
    
    servicio_id: { type: String, required: true},
    usuario: { type: String, required: true },
    servicio_tipo: { type: String, required: true },
    servicio_fecha: { type: Date, required: true },
    servicio_descripcion: { type: String, required: true },
    cliente: {
        cliente_id: { type: String, required: true },
        cliente_nombre: { type: String, required: true }
    }
}
);
let servicio = mongoose.model('servicio', servicioSchema, 'servicio');
export = ​ servicio;