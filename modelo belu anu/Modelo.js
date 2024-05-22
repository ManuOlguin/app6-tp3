"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarCorreo = exports.agregarPedido = exports.calcularTotalPedido = exports.mostrarProductosCarrito = exports.eliminarCantidadProductosCarrito = exports.agregarProductoAlCarrito = exports.filtrarProductos = exports.mostrarProductos = void 0;
function mostrarProductos() {
    // muestra todos los productos en la pagina principal en un mapa
}
exports.mostrarProductos = mostrarProductos;
function filtrarProductos(productos, palabra_buscada) {
    // Busca el producto por el nombre en el array de productos
    return productos.filter(listadoProducots => listadoProductos.listado.nombre.toLowerCase().includes(palabra_buscada.toLowerCase()));
}
exports.filtrarProductos = filtrarProductos;
// Función para agregar un producto al carrito
function agregarProductoAlCarrito(carrito, producto, cantidad) {
    // Se verifica que el producto no esté repetido y en ese caso, se agrega al Carrito junto con su cantidad
    // En caso de estar repetido, se le suma la nueva cantidad a la cantidad anterior 
}
exports.agregarProductoAlCarrito = agregarProductoAlCarrito;
function eliminarCantidadProductosCarrito(carrito, producto, cantidad) {
    // Eliminar cantidad de un producto
    // En caso de quedar en 0, se borra el producto del carrito
}
exports.eliminarCantidadProductosCarrito = eliminarCantidadProductosCarrito;
function mostrarProductosCarrito(carrito) {
    // Función para mostrar los productos en el carrito
}
exports.mostrarProductosCarrito = mostrarProductosCarrito;
function calcularTotalPedido(productos) {
    //  Calcula el precio total de todos los productos en el carrito
}
exports.calcularTotalPedido = calcularTotalPedido;
function agregarPedido(direccion, carrito) {
    // Cuando el usuario hace click en el botón "Confirmar pedido"
    // Llama a calcularTotalPedido
    // Envía a la base de datos los datos del pedido para que sea creado
}
exports.agregarPedido = agregarPedido;
// Importa la biblioteca dotenv
const dotenv = __importStar(require("dotenv"));
// Llama al método config() para cargar las variables de entorno desde el archivo .env
dotenv.config({ path: 'sendgrid.env' });
// Ahora puedes acceder a las variables de entorno utilizando process.env
const sendgridApiKey = process.env.SENDGRID_API_KEY;
function enviarCorreo() {
    // Envía datos del pedido por correo al admin.
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(sendgridApiKey);
    const msg = {
        to: 'finalhistoriadelarte@gmail.com', // Dirección de mail del admin hardcodeada 
        from: 'finalhistoriadelarte@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail
        .send(msg)
        .then(() => {
        console.log('Email sent');
    })
        .catch((error) => {
        console.error(error);
    });
}
exports.enviarCorreo = enviarCorreo;
;
enviarCorreo();
