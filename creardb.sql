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
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Lana para Perros", "bufanda_lana_perrosjpg", 1599);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto para Gatos", "bufanda_punto_gatosjpg", 1249);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Navidad para Perros", "bufanda_navidad_perrosjpg", 999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Rayas para Gatos", "bufanda_rayas_gatosjpg", 899);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Cuadros para Perros", "bufanda_cuadros_perrosjpg", 1499);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Algodón para Gatos", "bufanda_algodon_gatosjpg", 1099);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Invierno para Perros", "bufanda_invierno_perrosjpg", 1799);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Seda para Gatos", "bufanda_seda_gatosjpg", 1999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda a Cuadros para Perros", "bufanda_cuadros_perros_2jpg", 1199);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Lana Tejida para Gatos", "bufanda_lana_tejida_gatosjpg", 1399);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto Suave para Perros", "bufanda_punto_suave_perrosjpg", 1699);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Tela Transpirable para Gatos", "bufanda_tela_transpirable_gatosjpg", 949);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Moda para Perros", "bufanda_moda_perrosjpg", 1849);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Lunares para Gatos", "bufanda_lunares_gatosjpg", 799);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Algodón Orgánico para Perros", "bufanda_algodon_organico_perrosjpg", 2299);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Encaje para Gatos", "bufanda_encaje_gatosjpg", 1049);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Diseño para Perros", "bufanda_diseno_perrosjpg", 2199);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Franela para Gatos", "bufanda_franela_gatosjpg", 1299);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda Elegante para Perros", "bufanda_elegante_perrosjpg", 2499);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Terciopelo para Gatos", "bufanda_terciopelo_gatosjpg", 1449);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Cachemira para Perros", "bufanda_cachemira_perrosjpg", 2999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Croché para Gatos", "bufanda_croche_gatosjpg", 1149);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Estilo Clásico para Perros", "bufanda_estilo_clasico_perrosjpg", 2699);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Poliéster para Gatos", "bufanda_poliestr_gatosjpg", 999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Estampado para Perros", "bufanda_estampado_perrosjpg", 2349);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Tejido Grueso para Gatos", "bufanda_tejido_grueso_gatosjpg", 1399);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto de Cable para Perros", "bufanda_punto_cable_perrosjpg", 1949);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Tela de Algodón para Gatos", "bufanda_tela_algodon_gatosjpg", 1099);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Estilo Casual para Perros", "bufanda_estilo_casual_perrosjpg", 1549);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto Fino para Gatos", "bufanda_punto_fino_gatosjpg", 849);

SELECT * FROM Producto;
/* SELECT * FROM Pedido; */