CREATE TABLE users
(
    user_id serial NOT NULL , primary key(user_id),
	name character varying(100)
);
INSERT INTO users (name) VALUES ('Luis');
INSERT INTO users (name) VALUES ('Fred');

CREATE TABLE ticketss
(
    ticket_id serial NOT NULL , primary key(ticket_id),
    user_id integer, CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id),
    modulo character varying(20),
    motivo character varying(500) ,
    descripcion character varying(500) ,
    -- sugerencia character varying(200) ,
    -- 
    -- screenshot bytea,
    -- file bytea,
    telefono character varying(15),
    created timestamp with time zone,
    enabled boolean
);


INSERT INTO tickets (name,carrera,modulo,motivo,telefono,enabled) VALUES ('Luis',1,true,'motivo','09978',true);


CREATE TABLE ticket_tip
(
    ticketTip_id serial NOT NULL , primary key(ticketTip_id),
    ticket_id integer,CONSTRAINT fk_ticket FOREIGN KEY (ticket_id) REFERENCES ticketss(ticket_id),
	tip_id integer,CONSTRAINT fk_tip FOREIGN KEY (tip_id) REFERENCES tips(tip_id)
);