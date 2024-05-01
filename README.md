## Investigaciones

El equipo comenzó el desarrollo del proyecto planteando las posibles funciones que necesitaríamos realizar según el enunciando y verificando si conocíamos como llevar a cabo cada una.

### Cómo armar el buscador y el carrito de la manera más eficiente

Se nos ocurrieron 2 opciones:
- Opción 1: creando un array de objetos que se agregue a un mapa (donde se utilice el .get para sacar los productos). 
- Opción 2: creando un array de objetos y que la forma de filtrar sea con filter o find.

Le mandamos al CHAT-GPT para que muestre las dos opciones y nos convenció más la primera, también porque es lo que estuvimos viendo hasta ahora. La opinión del chat es que son parecidas, sería más crucial el uso del mapa si hay un montón de productos. 

Luego le pedimos que nos dé una opción nueva y nos dijo: 
- Opción 3: Clases para Productos y Carrito. En esta opción, se emplea la programación orientada a objetos mediante clases para representar productos y el carrito de pedidos.

Luego de hablarlo con Diego, comprendimos que lo más fácil y efectivo es la opción 2, ya que no vimos nada sobre programación orientada a objetos. Tampoco es buena opción el map porque se resuelve de manera más simple con un filter.

### Cómo mostrar la búsqueda realizada
Pensamos dos opciones e investigamos con el CHAT-GPT cuál era la más eficiente:
- Opción 1: Filtrado de productos. Hacer desaparecer todo lo no filtrado.
- Opción 2: Renderizado dinámico. Mostrar de cero solo lo filtrado.

Lo que encontramos es que si no tuviésemos que mostrar en la página inicial a todos los productos, la opción 2 sería la más eficaz porque mejoraría el rendimiento al solo tener que crear y mostrar elementos que son relevantes para la búsqueda actual (solo se renderizan los productos que coinciden con la búsqueda del usuario). 

Pero como tenemos que mostrar desde un principio los 30 productos, conviene usar la opción 1, donde, al mostrar todos los productos de una vez, evitamos la necesidad de hacer múltiples solicitudes al servidor para cargar los productos uno por uno. Esto garantiza una carga inicial rápida de la página, lo cual es importante para la experiencia del usuario.

### Cómo conviene guardar los pedidos para después mostrárselos al admin
Teníamos dos opciones

- Opción 1: Base de datos local. Como en el enunciado se sugería guardar la información de los pedidos en la misma base de datos que ya teníamos para los productos, buscamos cómo hacer esto. ChatGPT nos sugirió guardarlo en el localStorage (la base de datos local) con get. Pero después de indagar más en esta opción y de consultarlo con Diego, encontramos que no era conveniente porque el localStorage es un medio mas temporal, no se puede replicar a otros dispositivos, necesita tener la app abierta y tiene espacio limitado.

Entonces decidimos avanzar por otra opción:

- Opción 2: enviar pedidos por mail al admin. Asumimos que hay un solo administrador, entonces la aplicación ya tendría hardcodeada la dirección de email del admin a donde mandar cada pedido.

## Decisiones de modelado con DDD

### Entidades
Arrancamos el proceso de DDD eligiendo 4 entidades:

- `Producto` que va a tener la información sobre cada producto (nombre, imagen, precio).
- `ListadoSinBusqueda` que representa la información de lo que el admin planteó como pantalla principal (array de todos los 30 productos). 
- `ListadoConBusqueda` que representa a todos los productos que coinciden con la palabra escrita por el usuario en el buscador. Va cambiando según cambie la búsqueda.
- `Carrito` que representa todos los productos que el usuario seleccionó para generar un pedido y tiene un id identificador del usuario al momento de realizar el pedido y la cantidad de un mismo producto seleccionado. Aunque la consigna no pida explícitamente la cantidad, entendemos que un cliente puede querer varios ejemplares de un mismo producto. 
- `Pedido` que tiene toda la información del carrito, más la dirección que ingresa el usuario en el formulario, para enviarlo por mail al administrador.
- No consideramos que listado de resultados de búsqueda sea una entidad porque solo serviría para el admin tenga un registro de los productos que fueron buscados, y esto es algo que la consigna no pide así que simplificamos. :P

Las relaciones entre entidades serían así:
- `ListadoSinBusqueda` tiene muchos `Producto`.
- `ListadoConBusqueda` busca dentro del array `ListadoSinBusqueda` los productos cuyo nombre incluya la palabra_buscada.
- `Carrito` tiene muchos `Producto` sacados del `ListadoConBusqueda`.
- `Pedido` tiene todos los `Producto` sacados del `Carrito`.

Luego de una exhaustiva investigación (el diego) llegamos a la conclusión de que no hay restricciones en las relaciones entre estas entidades; es decir, no hay reglas.

## ABM
### Acciones
- `Producto`: ninguna acción, ya sabemos que son 30 productos en total que ya existen en el JSON, ni el admin ni el usuario van a actualizar nada.
- `ListadoSinBusqueda`: consultarlo para la búsqueda de productos por nombre.
- `ListadoConBusqueda`: VER!!!!!!!!!!!!!!
- `Carrito`: agrega y borra productos, por cantidad y por tipo de producto.
- `Pedido`: ninguna acción, porque se guarda esta información de manera automática, ni el usuario ni el admin influyen en lo que pasa después de que el usuario clickea el botón "realizar pedido".

### M: cada función está definida/explicada en el Modelo.ts
### VC lo vemos en el próximo capítulo XD
