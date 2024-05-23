import fs from 'fs';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import sqlite3  from 'sqlite3';
import { open } from 'sqlite';
dotenv.config();

export interface Producto {
    id: number,
    nombre: string,
    imagen: string,
    precio: number
}
export interface ListadoProductos {
    listado: Producto[]
}
export interface ListadoConBusqueda {
    palabra_buscada: string,
    productos: ListadoProductos
}
export interface ProductoEnCarrito {
    producto: Producto,
    cantidad: number,
}
export interface Carrito {
    productos_carrito: ProductoEnCarrito[]; //array de productos pedidos y sus cantidades
}
export interface Pedido {
    id: string;
    productos_pedidos: Carrito;
    nombre_cliente: string;
    precio_total: number;
}

async function abrirConexion() {
    return open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
    })
}


export async function consultarListado(): Promise<Producto[]> {
    // Arma un Listado que contiene todas las ciudades en la base de datos
    const db = await abrirConexion();

    const productos: Producto[] = await db.all<Producto[]>('SELECT * FROM Producto');
    console.log(productos);
    return productos;
}

//checkeada
export async function traerProductos(filePath: string): Promise<Producto[]> {
    // trae todos los productos
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

//checkeada
export function filtrarProductos(productosTotales: ListadoProductos, palabra_buscada: string): ListadoConBusqueda {
    // Busca el producto por el nombre en el array de productos
    let productos: ListadoProductos = { listado: productosTotales.listado.filter(producto => producto.nombre.toLowerCase().includes(palabra_buscada.toLowerCase())) };

    return { palabra_buscada, productos };
}

//checkeada
// Función para agregar un producto al carrito
export function agregarProductoAlCarrito(carrito:Carrito, producto: Producto, cantidad: number,): Carrito {
    // Se verifica que el producto no esté repetido y en ese caso, se agrega al Carrito junto con su cantidad
    // En caso de estar repetido, se le suma la nueva cantidad a la cantidad anterior 
    const index = carrito.productos_carrito.findIndex(p => p.producto.id === producto.id);

    if (index !== -1) {
        carrito.productos_carrito[index].cantidad += cantidad;
    } else {
        carrito.productos_carrito.push({producto: producto,  cantidad: cantidad });
    }
    return carrito;
}

//checkeada
export function eliminarCantidadProductosCarrito(carrito:Carrito, producto: Producto, cantidad: number,): Carrito {
    // Eliminar cantidad de un producto
    // En caso de quedar en 0, se borra el producto del carrito
    const index = carrito.productos_carrito.findIndex(p => p.producto.id === producto.id);

    if (index !== -1) {
        carrito.productos_carrito[index].cantidad -= cantidad;
        if (carrito.productos_carrito[index].cantidad <= 0) {
            carrito.productos_carrito.splice(index, 1);
        }
    } else {
        //producto no encontrado
        console.log('Producto no encontrado');
    }
    return carrito;
}

//no se para que es
export function mostrarProductosCarrito(carrito:Carrito): void {
    // Función para mostrar los productos en el carrito
}

//checkeada
export function calcularTotalPedido(productos: Carrito) : number {
    //  Calcula el precio total de todos los productos en el carrito
    let total = 0;
    productos.productos_carrito.forEach(p => {
        total += p.producto.precio * p.cantidad;
    });
    return total;

}

export async function agregarPedido(nombre: string, carrito: Carrito): Promise<Pedido> {
    // Cuando el usuario hace click en el botón "Confirmar pedido"
    // Llama a calcularTotalPedido
    // Envía a la base de datos los datos del pedido para que sea creado
    const total = calcularTotalPedido(carrito);
    enviarCorreo(carrito, nombre, total);
    return { id: '1', nombre_cliente: nombre, productos_pedidos: carrito, precio_total: total };
}




    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAILPASS
        }
      });
    export function enviarCorreo(carrito: Carrito, nombre: string, total: number) {
        const productos = carrito.productos_carrito.map(item => `${item.cantidad} x ${item.producto.nombre}`).join(', ');

        const mailOptions = {
            from: 'ecommerceprogra@gmail.com',
            to: 'ecommerceprogra@gmail.com',
            subject: '¡Nuevo pedido!',
            text:  nombre +'! Hiciste un nuevo pedido por un total de $' + total + '. Los productos son: ' + productos
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    

/* EJEMPLO FUNCIONES DE MODELO DE DIEGO
export async function agregarCiudad(nombre: string): Promise<Ciudad> {
    // Agrega una nueva Ciudad a la base de datos
    const db = await abrirConexion();

    const temperatura = 0;
    const query = `INSERT INTO Ciudad (nombre, temperatura) VALUES ('${nombre}', ${temperatura})`;
    await db.run(query);

    return { nombre, temperatura };
}

*/

// TESTING

/*traerProductos('./productos.json')
    .then(data => console.log(filtrarProductos({ listado: data }, 'gatos').productos.listado)
)
    .catch(err => console.error(err));*/

/*
const carritoPrueba: Carrito = {
    productos_carrito: [
        {
            producto: {
                id: 1,
                nombre: 'Producto 1',
                precio: 100,
                imagen: 'url_to_imagen_1'
            },
            cantidad: 2
        },
        {
            producto: {
                id: 2,
                nombre: 'Producto 2',
                precio: 200,
                imagen: 'url_to_imagen_2'
            },
            cantidad: 3
        }
    ]
};
    enviarCorreo(carritoPrueba, 'nombre', 1000)

const productoPrueba: Producto = {
    id: 2,
    nombre: 'Producto 2',
    precio: 200,
    imagen: 'url_to_imagen_2'
}

console.log(eliminarCantidadProductosCarrito( carritoPrueba, productoPrueba, 3))*/