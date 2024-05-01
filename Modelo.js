"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviarCorreo = exports.agregarPedido = exports.calcularTotalPedido = exports.mostrarProductosCarrito = exports.eliminarCantidadProductosCarrito = exports.agregarProductoAlCarrito = exports.mostrarProductosFiltrados = exports.filtrarProductos = exports.mostrarProductos = void 0;
function mostrarProductos() {
    // muestra todos los productos en la pagina principal en un mapa
}
exports.mostrarProductos = mostrarProductos;
function filtrarProductos(productos, palabra_buscada) {
    // Busca el producto por el nombre en el array de productos
    return productos.filter(listadoProducots => listadoProductos.listado.nombre.toLowerCase().includes(palabra_buscada.toLowerCase()));
}
exports.filtrarProductos = filtrarProductos;
function mostrarProductosFiltrados() {
    // muestra en pantalla los productos filtrados por la búsqueda. Por ejemplo:
    // const productosFiltrados: Producto[] = filtrarProductos(listadoConBusqueda);
}
exports.mostrarProductosFiltrados = mostrarProductosFiltrados;
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
function enviarCorreo(pedido) {
    const msg = {
        to: 'tudireccion@email.com',
        from: 'tudireccion@email.com', // Cambia esto por tu dirección de correo
        subject: 'Nuevo Pedido:' + pedido.id,
        text: 'Te ha llegado el pedido' + pedido.id + 'que debes enviar a la siguiente dirección:' + pedido.direccion
            + '.<br>'
            + 'Pedido' + pedido.id + ':' + '<br>' + pedido.productos_pedidos
            + 'A cobrar:' + pedido.precio_total
    };
}
exports.enviarCorreo = enviarCorreo;
