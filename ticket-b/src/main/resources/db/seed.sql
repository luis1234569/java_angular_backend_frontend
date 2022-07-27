\dt  listar las bases de datos
\c project_db   ingresar a la base
\d tsticketss  descripcion
select tsticket_id, dni, carrera, modulo, motivo, sugerencia, descripcion,telefono, created, updates from tsticketss;




CREATE TABLE tstickets
(
    tsticket_id serial NOT NULL , primary key(tsticket_id),
    dni character varying(15),
    carrera character varying(100),
    modulo boolean,
    motivo character varying(500) ,
    sugerencia character varying(200) ,
    descripcion character varying(500) ,
    screenshot bytea,
    file bytea,
    telefono character varying(15),
    created timestamp with time zone,
    updates timestamp with time zone,
    enabled boolean
)





