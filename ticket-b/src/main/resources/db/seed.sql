\dt  listar las bases de datos
\c project_db   ingresar a la base
\d tsticketss  descripcion
select tsticket_id, dni, carrera, modulo, motivo, sugerencia, descripcion,telefono, created, updates from tsticketss;