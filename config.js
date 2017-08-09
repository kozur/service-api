"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Crea la conexión a MongoDB
exports.connectionStrings = {
    // mongoDB_main: 'mongodb://localhost/service-db'
    mongoDB_main: {
        host: 'mongodb://kozur:433134@cluster1-shard-00-00-waonc.mongodb.net:27017,cluster1-shard-00-01-waonc.mongodb.net:27017,cluster1-shard-00-02-waonc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster1-shard-0&authSource=admin',
        auth: { authdb: "admin" },
        server: { reconnectTries: Number.MAX_VALUE }
    }
};
// Habilita/deshabilita módulos de la API
exports.modules = {
    turnos: {
        active: true,
        path: './modules/app/routes',
        route: '/modules/app',
        auth: true,
    }
};
//# sourceMappingURL=config.js.map