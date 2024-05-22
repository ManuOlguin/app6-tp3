import express, { Request, Response, Express, NextFunction } from 'express';
import dotenv from 'dotenv';
import sqlite3, { open } from 'sqlite';
import { agregarPedido, traerProductos } from './src/Modelo';
 
dotenv.config();

const port = process.env.PORT || 8080;
const app: Express = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});


app.post("/v1/pedido/agregar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const direccion = req.body.direccion;
        const carrito = req.body.carrito;

        await agregarPedido(direccion, carrito);
        res.send("OK");
    } catch (error) {
        next(error);
    }


});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

async function abrirConexion() {
    return open({
        filename: './db.sqlite',
        driver: sqlite3.Database
    })
}

function errorHandler(
    error: Error, request: Request, response: Response, next: NextFunction
) {
    console.log(`Hubo un error! ${error.message}`);
    response.header("Content-Type", 'application/json');
    response.status(500).json({ mensaje: error.message });
}

app.use(errorHandler);