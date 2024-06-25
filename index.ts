import express, { Request, Response, Express, NextFunction } from 'express';
import dotenv from 'dotenv';
import { consultarListado, agregarPedido } from './src/Modelo';
import * as path from 'path';
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 8080;
const app: Express = express();
app.use(cors());

app.use(express.json());


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});


app.get("/v1/productos/consultar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        
        res.send(await consultarListado());
    } catch (error) {
        next(error);
    }
});

app.post("/v1/pedido/enviar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const nombre = req.body.nombre;
        const carrito = req.body.carrito;
        const direccion = req.body.direccion;
        res.send(await agregarPedido(nombre, carrito, direccion));
    } catch (error) {
        next(error);
    }
});

app.get("/v1/productos/consultarImagen/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const producto = await consultarListado();
        const productoBuscado = producto.find(p => p.id === parseInt(id));
        if (productoBuscado) {
            const imagePath = path.join(__dirname, 'img', productoBuscado.imagen);
            res.sendFile(imagePath);
        } else {
            res.status(404).send("Producto no encontrado");
        }
    } catch (error) {
        next(error);
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


function errorHandler(
    error: Error, request: Request, response: Response, next: NextFunction
) {
    console.log(`Hubo un error! ${error.message}`);
    response.header("Content-Type", 'application/json');
    response.status(500).json({ mensaje: error.message });
}

app.use(errorHandler);