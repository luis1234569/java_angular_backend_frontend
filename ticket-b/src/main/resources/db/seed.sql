\dt  listar las bases de datos
\c project_db   ingresar a la base
\d tsticketss  descripcion
select tsticket_id, dni, carrera, modulo, motivo, sugerencia, descripcion,telefono, created, updates from tsticketss;

ALTER TABLE tickets RENAME COLUMN dni TO name;


CREATE TABLE carreras
(
    carrera_id serial NOT NULL , primary key(carrera_id),
	name character varying(100)
);
INSERT INTO carreras (name) VALUES ('agricultura');



CREATE TABLE tickets
(
    ticket_id serial NOT NULL , primary key(ticket_id),
    name character varying(15),
    carrera integer, CONSTRAINT fk_carrera FOREIGN KEY (carrera) REFERENCES carreras(carrera_id),
    modulo boolean,
    motivo character varying(500) ,
    -- sugerencia character varying(200) ,
    -- descripcion character varying(500) ,
    -- screenshot bytea,
    -- file bytea,
    telefono character varying(15),
    created timestamp with time zone,
    updates timestamp with time zone,
    enabled boolean
);
INSERT INTO tickets (name,carrera,modulo,motivo,telefono,enabled) VALUES ('Luis',1,true,'motivo','09978',true);



CREATE TABLE tips
(
    tip_id serial NOT NULL , primary key(tip_id),
	name character varying(100),
    descripcion character varying(500)
);
INSERT INTO tips (name) VALUES ('devisar');

CREATE TABLE ticketTip
(
    ticketTip_id serial NOT NULL , primary key(ticketTip_id),
    ticket_id integer,CONSTRAINT fk_ticket FOREIGN KEY (ticket_id) REFERENCES tickets(ticket_id),
	tip_id integer,CONSTRAINT fk_tip FOREIGN KEY (tip_id) REFERENCES tips(tip_id)
);
INSERT INTO ticketTip (ticket_id,tip_id) VALUES (2,1);





