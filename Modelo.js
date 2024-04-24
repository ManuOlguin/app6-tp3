"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarPedidosAdmin = exports.guardarPedidoBDD = exports.ingresarDatosPedido = exports.mostrarCarrito = exports.agregarCarrito = exports.buscarProducto = exports.mostrarProductos = void 0;
function mostrarProductos() {
    // muestra todos los productos en la pagina principal en un mapa
}
exports.mostrarProductos = mostrarProductos;
function buscarProducto(nombre) {
    // Busca el producto por el nombre en el JSON
    // muestra los productos filtrados con mostrarProducto()
}
exports.buscarProducto = buscarProducto;
function agregarCarrito() {
    /* no entendemos hasta que punto reslolver lo "mas facil posible", porque lo sencillo seria
     tener seleccion como boolean en el producto, pero lo real es mostrar en algun lado los productos seleccionados
    interfaz seleccionados que tenga al producto, la cantidad y el boton ingresar direccion
     */
}
exports.agregarCarrito = agregarCarrito;
function mostrarCarrito() {
    // ...
}
exports.mostrarCarrito = mostrarCarrito;
function ingresarDatosPedido() {
    // form -> direccion y id...
}
exports.ingresarDatosPedido = ingresarDatosPedido;
function guardarPedidoBDD() {
    // guarda el pedido en la base de datos...
}
exports.guardarPedidoBDD = guardarPedidoBDD;
function mostrarPedidosAdmin() {
    // opcion 1: agregar una pagina adicional del admin con todos los pedidos
    // opcion 2: mandar los pedidos realizados al mail del admin
}
exports.mostrarPedidosAdmin = mostrarPedidosAdmin;
