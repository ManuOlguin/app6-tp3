export interface Producto {
    nombre: string,
    imagen: string,
    precio: number
}
export interface ListadoProductos {
    productos: Producto[]
}
export interface Carrito {
    id: string;
    productos: Producto[];
    cantidad: number;
}
export interface Pedido {
    productos: Carrito[];
    direccion: string;
}

export function mostrarProductos(): ListadoProductos[] {
    // muestra todos los productos en la pagina principal en un mapa
}

export function buscarProductoPorNombre (nombre: string): Producto {
    // Busca el producto por el nombre en el JSON
    // muestra los productos filtrados con mostrarProducto()
}

export function agregarAlCarrito(producto:Producto[], cantidad:number): Carrito {
    // agrega productos seleccionados a carrito en un array, identificado por un id
    // pide también el parámetro cantidad para saber qué cantidad de cada producto quiere el usuario  
}

export function borrarProductoDeCarrito(producto: Producto): void {
    // Borra un producto del Carrito 
}


export function mostrarCarrito(): Carrito {
    // en una nueva página (carrito) mostrar todos los productos agregados
}

export function ingresarDatosPedido(): Pedido {
    // solicitar mediante un formulario la dirección del cliente (donde se enviará el pedido)
}

export function mandarMailAdmin(): Pedido {
    // mandar los pedidos realizados al mail del admin

}

