const express = require('express')
const cors = require('cors')


class Server {
    //Metodo que inicia las propiedades del objeto de la clase y los metodos que tiene por defecto
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Midelwers
        this.middlewares();
        //Rutas de la aplicacion        

        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors())
        
        // lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routers/usuarios'))
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port)
        });
    }

}

module.exports = Server