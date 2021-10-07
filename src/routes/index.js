import { Router } from 'express'
import productosRouter from './productos'
import { productosService } from '../services/productos';
import { mensajesService } from '../services/mensajes';


const miRouter = Router();

miRouter.use('/api/productos', productosRouter)


miRouter.get('/', (req, res) =>{
    let data = {
        layout: 'index',
        hayDatos: false,
        productos:productosService.leer(),
        mensajes:mensajesService.leer(),
    }
    if(req.session.usuario)
    {
        data = {
            usuario:req.session.usuario,
            layout: 'index',
            hayDatos: false,
            productos:productosService.leer(),
            mensajes:mensajesService.leer(),
        }
    }

    if(productosService.leer()){
        data.hayDatos=true;
    }
    res.render('main',data)
})


export default miRouter;