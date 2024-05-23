CREATE TABLE Producto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    imagen TEXT NOT NULL,
    precio INTEGER NOT NULL
);
/* 
CREATE TABLE Pedido (
    id INTEGER PRIMARY KEY,
    id_productos_pedidos INTEGER NOT NULL,
    direccion TEXT NOT NULL,
    nombre_cliente TEXT NOT NULL,
    precio_total INTEGER NOT NULL
);

CREATE TABLE ProductosPedidos (
    id INTEGER PRIMARY KEY,
    id_producto INTEGER NOT NULL
); */
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda roja para gatos", "bufanda_roja_gato.jpg", 5000);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda azul para gatos", "bufanda_azul_gato.jpg", 5500);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda violeta para perros", "bufanda_violeta_perro.jpg", 8800);

SELECT * FROM Producto;
/* SELECT * FROM Pedido; */