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
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Lana para Perros", "bufanda_lana_perros.png", 1599);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto para Gatos", "bufanda_punto_gatos.png", 1249);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Navidad para Perros", "bufanda_navidad_perros.png", 999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Rayas para Gatos", "bufanda_rayas_gatos.png", 899);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Cuadros para Perros", "bufanda_cuadros_perros.png", 1499);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Algodón para Gatos", "bufanda_algodon_gatos.png", 1099);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Invierno para Perros", "bufanda_invierno_perros.png", 1799);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Seda para Gatos", "bufanda_seda_gatos.png", 1999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda a Cuadros para Perros", "bufanda_cuadros_perros_2.png", 1199);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Lana Tejida para Gatos", "bufanda_lana_tejida_gatos.png", 1399);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto Suave para Perros", "bufanda_punto_suave_perros.png", 1699);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Tela Transpirable para Gatos", "bufanda_tela_transpirable_gatos.png", 949);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Moda para Perros", "bufanda_moda_perros.png", 1849);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Lunares para Gatos", "bufanda_lunares_gatos.png", 799);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Algodón Orgánico para Perros", "bufanda_algodon_organico_perros.png", 2299);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Encaje para Gatos", "bufanda_encaje_gatos.png", 1049);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Diseño para Perros", "bufanda_diseno_perros.png", 2199);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Franela para Gatos", "bufanda_franela_gatos.png", 1299);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda Elegante para Perros", "bufanda_elegante_perros.png", 2499);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Terciopelo para Gatos", "bufanda_terciopelo_gatos.png", 1449);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Cachemira para Perros", "bufanda_cachemira_perros.png", 2999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Croché para Gatos", "bufanda_croche_gatos.png", 1149);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Estilo Clásico para Perros", "bufanda_estilo_clasico_perros.png", 2699);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Poliéster para Gatos", "bufanda_poliestr_gatos.png", 999);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Estampado para Perros", "bufanda_estampado_perros.png", 2349);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Tejido Grueso para Gatos", "bufanda_tejido_grueso_gatos.png", 1399);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto de Cable para Perros", "bufanda_punto_cable_perros.png", 1949);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Tela de Algodón para Gatos", "bufanda_tela_algodon_gatos.png", 1099);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Estilo Casual para Perros", "bufanda_estilo_casual_perros.png", 1549);
INSERT INTO Producto (nombre, imagen, precio) VALUES ("Bufanda de Punto Fino para Gatos", "bufanda_punto_fino_gatos.png", 849);

SELECT * FROM Producto;
/* SELECT * FROM Pedido; */