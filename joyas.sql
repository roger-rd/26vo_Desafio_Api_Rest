DROP TABLE IF EXISTS inventario;

CREATE TABLE inventario (
	id SERIAL, 
	nombre VARCHAR(50), 
	categoria VARCHAR(50),
	metal VARCHAR(50), 
	precio INT, 
	stock INT);

INSERT INTO inventario values
(DEFAULT, 'Collar Heart', 'collar', 'oro', 20000 , 2),
(DEFAULT, 'Collar History', 'collar', 'plata', 15000 , 5),
(DEFAULT, 'Aros Berry', 'aros', 'oro', 12000 , 10),
(DEFAULT, 'Aros Hook Blue', 'aros', 'oro', 25000 , 4),
(DEFAULT, 'Anillo Wish', 'aros', 'plata', 30000 , 4),
(DEFAULT, 'Anillo Cuarzo Greece', 'anillo', 'oro', 40000 , 2),
(DEFAULT, 'Collar Heart 2', 'collar', 'oro', 20000, 2),
(DEFAULT, 'Collar History 2', 'collar', 'plata', 15000, 5),
(DEFAULT, 'Aros Berry 2', 'aros', 'oro', 12000, 10),
(DEFAULT, 'Aros Hook Blue 2', 'aros', 'oro', 25000, 4),
(DEFAULT, 'Anillo Wish 2', 'aros', 'plata', 30000, 4),
(DEFAULT, 'Anillo Cuarzo Greece 2', 'anillo', 'oro', 40000, 2),
(DEFAULT, 'Collar Heart 3', 'collar', 'oro', 20000, 2),
(DEFAULT, 'Collar History 3', 'collar', 'plata', 15000, 5),
(DEFAULT, 'Aros Berry 3', 'aros', 'oro', 12000, 10),
(DEFAULT, 'Aros Hook Blue 3', 'aros', 'oro', 25000, 4),
(DEFAULT, 'Anillo Wish 3', 'aros', 'plata', 30000, 4),
(DEFAULT, 'Anillo Cuarzo Greece 3', 'anillo', 'oro', 40000, 2),
(DEFAULT, 'Collar Heart 4', 'collar', 'oro', 20000, 2),
(DEFAULT, 'Collar History 4', 'collar', 'plata', 15000, 5),
(DEFAULT, 'Aros Berry 4', 'aros', 'oro', 12000, 10),
(DEFAULT, 'Aros Hook Blue 4', 'aros', 'oro', 25000, 4),
(DEFAULT, 'Anillo Wish 4', 'aros', 'plata', 30000, 4),
(DEFAULT, 'Anillo Cuarzo Greece 4', 'anillo', 'oro', 40000, 2),
(DEFAULT, 'Collar Heart 5', 'collar', 'oro', 20000, 2),
(DEFAULT, 'Collar History 5', 'collar', 'plata', 15000, 5),
(DEFAULT, 'Aros Berry 5', 'aros', 'oro', 12000, 10),
(DEFAULT, 'Aros Hook Blue 5', 'aros', 'oro', 25000, 4),
(DEFAULT, 'Anillo Wish 5', 'aros', 'plata', 30000, 4),
(DEFAULT, 'Anillo Cuarzo Greece 5', 'anillo', 'oro', 40000, 2),
(DEFAULT, 'Collar Heart 6', 'collar', 'oro', 20000, 2),
(DEFAULT, 'Collar History 6', 'collar', 'plata', 15000, 5),
(DEFAULT, 'Aros Berry 6', 'aros', 'oro', 12000, 10),
(DEFAULT, 'Aros Hook Blue 6', 'aros', 'oro', 25000, 4),
(DEFAULT, 'Anillo Wish 6', 'aros', 'plata', 30000, 4),
(DEFAULT, 'Anillo Cuarzo Greece 6', 'anillo', 'oro', 40000, 2);

SELECT * FROM inventario;
SELECT * FROM inventario LIMIT 5;

SELECT * FROM inventario ORDER BY nombre ASC;

SELECT * FROM inventario ORDER BY id ASC LIMIT 5 OFFSET 4;
SELECT * FROM inventario WHERE ;



