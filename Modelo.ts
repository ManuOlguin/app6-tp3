export interface Producto {
    nombre: string,
    imagen: string,
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

export function buscarProducto(nombre: string): Ciudad {
    // Agrega una nueva Ciudad a la base de datos
}

export function borrarCiudad(ciudad: Ciudad): void {
    // Borra una ciudad de la base de datos
}

export function consultarListado(): Listado {
    // Arma un Listado que contiene todas las ciudades en la base de datos
}

export function verificarAlertas(): Alerta[] {
    // Proceso que se ejecuta cada una hora y chequea si hay que mandar una alerta
}