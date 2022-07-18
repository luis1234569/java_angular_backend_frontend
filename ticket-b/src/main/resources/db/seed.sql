\dt  listar las bases de datos
\c project_db   ingresar a la base
\d tsticketss  descripcion
select dni, carrera, modulo, motivo, sugerencia, descripcion,telefono, created from tsticketss;
select dni, carrera, modulo, motivo, sugerencia, descripcion,telefono, created, updates from tsticketss;
select tsticket_id, dni, carrera, modulo, motivo, sugerencia, descripcion,telefono, created, updates from tsticketss;