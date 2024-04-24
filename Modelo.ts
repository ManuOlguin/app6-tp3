export interface Producto {
    nombre: string,
    imagen: string,
    seleccion: boolean,
    precio: number
}
export interface ListadoProductos {
    productos: Producto[]
}
export interface Pedido {
    id: string;
    productos: Producto[];
    direccion: string;
}

export function mostrarProductos(): ListadoProductos[] {
    // muestra todos los productos en la pagina principal en un mapa
    
}

export function buscarProducto(nombre: string): Producto {
    // Busca el producto por el nombre en el JSON
    // muestra los productos filtrados con mostrarProducto()
}

export function agregarCarrito(): Producto {
    /* no entendemos hasta que punto reslolver lo "mas facil posible", porque lo sencillo seria
     tener seleccion como boolean en el producto, pero lo real es mostrar en algun lado los productos seleccionados 
    interfaz seleccionados que tenga al producto, la cantidad y el boton ingresar direccion 
     */
}

export function mostrarCarrito(): Listado {
    // ...
}

export function ingresarDatosPedido(): Listado {
    // form -> direccion y id...
}

export function guardarPedidoBDD(): Listado {
    // guarda el pedido en la base de datos...
}

export function mostrarPedidosAdmin(): Listado {
    // opcion 1: agregar una pagina adicional del admin con todos los pedidos
    // opcion 2: mandar los pedidos realizados al mail del admin

}

