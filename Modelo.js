"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mandarMailAdmin = exports.ingresarDatosPedido = exports.mostrarCarrito = exports.borrarProductoDeCarrito = exports.agregarAlCarrito = exports.buscarProductoPorNombre = exports.mostrarProductos = void 0;
function mostrarProductos() {
    // muestra todos los productos en la pagina principal en un mapa
}
exports.mostrarProductos = mostrarProductos;
function buscarProductoPorNombre(nombre) {
    // Busca el producto por el nombre en el JSON
    // muestra los productos filtrados con mostrarProducto()
}
exports.buscarProductoPorNombre = buscarProductoPorNombre;
function agregarAlCarrito(producto, cantidad) {
    // agrega productos seleccionados a carrito en un array, identificado por un id
    // pide también el parámetro cantidad para saber qué cantidad de cada producto quiere el usuario  
}
exports.agregarAlCarrito = agregarAlCarrito;
function borrarProductoDeCarrito(producto) {
    // Borra un producto del Carrito 
}
exports.borrarProductoDeCarrito = borrarProductoDeCarrito;
function mostrarCarrito() {
    // en una nueva página (carrito) mostrar todos los productos agregados
}
exports.mostrarCarrito = mostrarCarrito;
function ingresarDatosPedido() {
    // solicitar mediante un formulario la dirección del cliente (donde se enviará el pedido)
}
exports.ingresarDatosPedido = ingresarDatosPedido;
function mandarMailAdmin() {
    // mandar los pedidos realizados al mail del admin
}
exports.mandarMailAdmin = mandarMailAdmin;
