CREATE TABLE carrera
(
    carrera_id serial ,primary key (carrera_id),
    name character varying (200),
    created timestamp without time zone,
    updated timestamp without time zone,
    archived boolean,
    person_id integer,
    enable boolean
);
insert into carrera (name,enabled,person_id)values('name',true,1);

CREATE TABLE users
(
    person_id serial ,primary key (person_id),
    name character varying (200),
    mail character varying (200),
    login character varying (200),
    contra character varying (200),
    rol character varying (200),
    enabled boolean,
    created timestamp with time zone,
    updated timestamp with time zone,
    carrera_id integer,
);

insert into userss (name,mail,login,contra,rol,enabled,carrera_id)values('name','mail','login','contra','rol',true,5);