import express, { Request, Response, Express, NextFunction } from 'express';
import dotenv from 'dotenv';
import { consultarListado } from './src/Modelo';
 
dotenv.config();

const port = process.env.PORT || 8080;
const app: Express = express();
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