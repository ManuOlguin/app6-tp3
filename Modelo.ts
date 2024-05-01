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
    direccion: string;
    nombre_cliente: string;
    precio_total: number;
}

export function mostrarProductos(): ListadoProductos {
    // muestra todos los productos en la pagina principal en un mapa
}

export function filtrarProductos(productos: ListadoProductos, palabra_buscada: string): ListadoConBusqueda {
    // Busca el producto por el nombre en el array de productos
    return productos.filter(listadoProducots => listadoProductos.listado.nombre.toLowerCase().includes(palabra_buscada.toLowerCase()));
}

export function mostrarProductosFiltrados() {
    // muestra en pantalla los productos filtrados por la búsqueda. Por ejemplo:
    // const productosFiltrados: Producto[] = filtrarProductos(listadoConBusqueda);
}

// Función para agregar un producto al carrito
export function agregarProductoAlCarrito(carrito:Carrito, producto: Producto, cantidad: number,): Carrito {
    // Se verifica que el producto no esté repetido y en ese caso, se agrega al Carrito junto con su cantidad
    // En caso de estar repetido, se le suma la nueva cantidad a la cantidad anterior 
}

export function eliminarCantidadProductosCarrito(carrito:Carrito, producto: Producto, cantidad: number,): Carrito {
    // Eliminar cantidad de un producto
    // En caso de quedar en 0, se borra el producto del carrito
}

export function mostrarProductosCarrito(carrito:Carrito): void {
    // Función para mostrar los productos en el carrito
}

export function calcularTotalPedido(productos: Carrito) : number {
    //  Calcula el precio total de todos los productos en el carrito
}

export function agregarPedido(direccion: string, carrito: Carrito): Pedido {
    // Cuando el usuario hace click en el botón "Confirmar pedido"
    // Llama a calcularTotalPedido
    // Envía a la base de datos los datos del pedido para que sea creado
}

export function enviarCorreo(pedido:Pedido) {
 // Envía datos del pedido por correo al admin. Explicada en el README.
}