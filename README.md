## Investigaciones

El equipo comenzó el desarrollo del proyecto planteando las posibles funciones que necesitaríamos realizar según el enunciando y verificando si conocíamos como llevar a cabo cada una.

### Buscador y carrito 

Se nos ocurrieron 2 opciones:
- Opción 1: creando un array de objetos que se agregue a un mapa (donde se utilice el .get para sacar los productos). 
- Opción 2: creando un array de objetos y que la forma de filtrar sea con filter o find.

Le mandamos al CHAT-GPT para que muestre las dos opciones y nos convenció más la primera, también porque es lo que estuvimos viendo hasta ahora. La opinión del chat es que son parecidas, sería más crucial el uso del mapa si hay un montón de productos. 

Luego le pedimos que nos dé una opción nueva y nos dijo: 
- Opción 3: Clases para Productos y Carrito. En esta opción, se emplea la programación orientada a objetos mediante clases para representar productos y el carrito de pedidos.

Luego de hablarlo con Diego, comprendimos que lo más fácil y efectivo es la opción 2, ya que no vimos nada sobre programación orientada a objetos. Tampoco es buena opción el map porque se resuelve de manera más simple con un filter.

### Mostrar búsqueda
Pensamos dos opciones e investigamos con el CHAT-GPT cuál era la más eficiente:
- Opción 1: Filtrado de productos. Hacer desaparecer todo lo no filtrado.
- Opción 2: Renderizado dinámico. Mostrar de cero solo lo filtrado.

Lo que encontramos es que si no tuviésemos que mostrar en la página inicial a todos los productos, la opción 2 sería la más eficaz porque mejoraría el rendimiento al solo tener que crear y mostrar elementos que son relevantes para la búsqueda actual (solo se renderizan los productos que coinciden con la búsqueda del usuario). 

Pero como tenemos que mostrar desde un principio los 30 productos, conviene usar la opción 1, donde, al mostrar todos los productos de una vez, evitamos la necesidad de hacer múltiples solicitudes al servidor para cargar los productos uno por uno. Esto garantiza una carga inicial rápida de la página, lo cual es importante para la experiencia del usuario.

### Envío de mails
Teníamos dos opciones de guardar pedidos para después mostrárselos al admin:

- Opción 1: Base de datos local. Como en el enunciado se sugería guardar la información de los pedidos en la misma base de datos que ya teníamos para los productos, buscamos cómo hacer esto. ChatGPT nos sugirió guardarlo en el localStorage (la base de datos local) con get. Pero después de indagar más en esta opción y de consultarlo con Diego, encontramos que no era conveniente porque el localStorage es un medio mas temporal, no se puede replicar a otros dispositivos, necesita tener la app abierta y tiene espacio limitado.

Entonces decidimos avanzar por otra opción:

- Opción 2: enviar pedidos por mail al admin. Asumimos que hay un solo administrador, entonces la aplicación ya tendría hardcodeada la dirección de email del admin a donde mandar cada pedido.

Para llevar esto a cabo, encontramos (Diego) una API llamada Twilio SendGrid, que ofrece servicio de envío de hasta 100 correos electrónicos por día de manera gratuita.

Se utiliza de la siguiente forma:
1. Asegurarse de tener Node.js instalado.
2. Instalar el paquete Twilio SendGrid: npm install @sendgrid/mail
3. Configurar la API Key de Twilio SendGrid:
    - Loguearse en Twilio 
    - Desde la consola de administración de SendGrid se obtiene la API Key.
    - Luego, se configura la API Key en tu aplicación:
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    

    SENDGRID_API_KEY tiene que ser una variable de entorno que contenga tu API Key de SendGrid.

4. Crear función que usa la API de Twilio SendGrid. En el Modelo.ts ya armamos la firma de la función. A continuación mostramos un ejemplo de cómo podría ser su cuerpo:

 ```
 export function enviarCorreo(pedido:Pedido) {
    const msg = {
        to: 'direccionadmin@email.com', // Dirección de mail del admin hardcodeada 
        from: 'direccionadmin@email.com', 
        subject: 'Nuevo Pedido:' + pedido.id,
        text: 'Te ha llegado el pedido' + pedido.id + 'que debes enviar a la siguiente dirección:' + pedido.direccion 
        + '.<br>'
        + 'Pedido' + pedido.id + ':' + '<br>' + pedido.productos_pedidos
        + 'A cobrar:' + pedido.precio_total
    };
} 
```


## Decisiones de modelado con DDD

### Entidades
Arrancamos el proceso de DDD eligiendo 6 entidades:

- `Producto` que va a tener la información sobre cada producto (id, nombre, imagen, precio).
- `ListadoProductos` que representa la información de lo que el admin planteó como pantalla principal (array de todos los 30 productos). 
- `ListadoConBusqueda` que representa a todos los productos que coinciden con la palabra escrita por el usuario en el buscador. Va cambiando según cambie la búsqueda.
- `ProductosEnCarrito` representa al producto agregado al carrito junto con su cantidad seleccionada por el usuario. Esta es información que va a cambiar con cada compra, por eso la separamos de la información de Producto.
- `Carrito` es un array de ProductosEnCarrito, es decir, representa todos los productos que el usuario seleccionó con sus respectivas cantidades por unidad.
- `Pedido` tiene un id identificador del Pedido, toda la información del Carrito, la información del cliente al que hay que enviar ese pedido (nombre y dirección, que son datos que ingresa el cliente en un formulario antes de confirmar el pedido), y el precio total. Toda esta información luego se envía por mail al administrador.

Las relaciones entre entidades serían así:
- `ListadoProductos` tiene muchos `Producto`.
- `ListadoConBusqueda` busca dentro del array `ListadoProductos` los productos cuyo nombre incluya la palabra_buscada.
- `ProductoEnCarrito` asigna la cantidad ingresada por el cliente a un `Producto` agregado al carrito.
- `Carrito` muestra un array de `ProductoEnCarrito`; es decir, de todos los productos seleccionados con sus cantidades respectivas.
- `Pedido` muestra los datos de los productos pedidos que están en `Carrito`.

Luego de una exhaustiva investigación (el diego) llegamos a la conclusión de que no hay restricciones en las relaciones entre estas entidades; es decir, no hay reglas.

## ABM
### Acciones
- `Producto`: ninguna acción, ya sabemos que son 30 productos en total que ya existen en el JSON, ni el admin ni el usuario van a actualizar nada.
- `ListadoProductos`: ninguna acción, solo muestra los productos (array de Producto) en la página principal.
- `ListadoConBusqueda`: consulta, a través de palabra_buscada a ListadoProductos.
- `ProductoEnCarrito`: modifica la cantidad de un mismo producto en el Carrito.
- `Carrito`: agrega y borra productos (array de ProductoEnCarrito).
- `Pedido`: ninguna acción, porque se guarda esta información de manera automática, ni el usuario ni el admin influyen en lo que pasa después de que el usuario clickea el botón "realizar pedido".

### M: cada función está definida/explicada en el Modelo.ts
### VC lo vemos en el próximo capítulo XD
