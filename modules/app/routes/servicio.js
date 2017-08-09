"use strict";
var express = require("express");
var servicio = require("../schemas/servicio");
var router = express.Router();
router.get('/servicio', function (req, res, next) {
    var query = servicio.find({});
    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }
        console.log(res.json(data));
    });
});
router.get('/servicio/:id', function (req, res, next) {
    var query = servicio.findById(req.params.id);
    query.exec(function (err, data) {
        if (err) {
            return next(err);
        }
        console.log(res.json(data));
    });
});
router.put('/servicio/:id', function (req, res, next) {
    servicio.findByIdAndUpdate(req.params.id, req.body, function (err, data) {
        if (!err) {
            console.log('Se actualizo el servicio: ' + req.params.id);
            res.send(data);
        }
        else {
            return next(err);
        }
    });
});
router.delete('/servicio/:id', function (req, res, next) {
    servicio.deleteOne({ _id: req.params.id }, function (err, data) {
        if (!err) {
            console.log('Se borro el servicio: ' + req.params.id);
            res.send(data);
        }
        else {
            return next(err);
        }
    });
});
router.post('/servicio', function (req, res, next) {
    var per = new servicio({
        servicio_id: req.body.servicio_id,
        usuario: req.body.usuario,
        servicio_tipo: req.body.servicio_tipo,
        servicio_fecha: req.body.servicio_fecha,
        servicio_descripcion: req.body.servicio_descripcion,
        cliente: req.body.cliente
    });
    per.save(function (err, data) {
        if (err) {
            console.log('Error!');
            return next(err);
        }
        else {
            res.send(data);
            console.log('Servicio Guardado!');
        }
    });
});
module.exports = router;
//# sourceMappingURL=servicio.js.map