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
export interface ListadoConBusqueda {
    palabra_buscada: string,
    productos: Producto[]
}
export interface ProductoEnCarrito {
    id_producto: number,
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


export function calcularTotalPedido(carrito: Carrito, productos: Producto[]) : number {
    //  Calcula el precio total de todos los productos en el carrito
    let total = 0;
    carrito.productos_carrito.forEach(p => {
        const productoEncontrado = productos.find(prod => prod.id === p.id_producto);
        if (productoEncontrado) {
            total += productoEncontrado.precio * p.cantidad;
        }
    });
    return total;

}

export async function agregarPedido(nombre: string, carrito: Carrito, direccion: string): Promise<string> {
    // Cuando el usuario hace click en el botón "Confirmar pedido"
    // Llama a calcularTotalPedido
    // Envía a la base de datos los datos del pedido para que sea creado
    const productos = await consultarListado();
    const total = calcularTotalPedido(carrito, productos);
    enviarCorreo(carrito, nombre, total, direccion, productos);
    return "OK";
}
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAILPASS
        }
      });
    export function enviarCorreo(carrito: Carrito, nombre: string, total: number, direccion: string, productos: Producto[]) {
        const productosMapeados = carrito.productos_carrito.map(item => `${item.cantidad} x ${productos.find(prod => prod.id === item.id_producto)?.nombre}`).join(', ');

        const mailOptions = {
            from: 'ecommerceprogra@gmail.com',
            to: direccion,
            subject: '¡Nuevo pedido!',
            text:  nombre +'! Hiciste un nuevo pedido por un total de $' + total + '. Los productos son: ' + productosMapeados
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    