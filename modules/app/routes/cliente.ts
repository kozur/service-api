import * ​ ​as ​ express from 'express';
import * ​ ​as ​ cliente from '../schemas/cliente';
var router = express.Router();
router.get('/cliente', function (req, res, next) {
    let query = cliente.find({});
    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }
        console.log(res.json(data));
    });
});
// router.put('/cliente/:id', function (req, res, next) {
//     servicio.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
//         if (err) {
//             return next(err);
//         } res.json(data);
//     });
// });
router.post('/cliente', function (req, res, next) {
    let per = new cliente({
        cliente_id: req.body.cliente_id,
        cliente_nombre: req.body.cliente_nombre,
        cliente_telefono: req.body.cliente_telefono,
        cliente_direccion: {
            direccion_id: req.body.direccion_id,
            direccion_abrev: req.body.direccion_abrev
        }
    })
    per.save(function (err) {
        if (err) throw err;
        console.log('Cliente Guardado!');
    });
})
export = ​ router;

    // cliente_id: String,
    // cliente_nombre: String,
    // cliente_telefono: String,
    // cliente_direccion: {
    //     direccion_id: String,
    //     direccion_abrev: String
    // }