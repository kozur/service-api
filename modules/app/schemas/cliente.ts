import * ​ ​as ​ mongoose from 'mongoose';
let clienteSchema = new mongoose.Schema({
    cliente_id: String,
    cliente_nombre: String,
    cliente_telefono: String,
    cliente_direccion: {
        direccion_id: String,
        direccion_abrev: String
    }
});
let cliente = mongoose.model('cliente', clienteSchema, 'cliente');
export = ​ cliente;