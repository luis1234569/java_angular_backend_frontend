package yavirac.ticket.feature.ticket;


import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("tsticketss")
public class Tsticket {

    @Id
    @Column("tsticket_id")
    private long tsticketId;

    private String dni;
    private String carrera;
    private boolean modulo;
    private String motivo;
    private String sugerencia;
    private String descripcion;
    private String telefono;
    private Timestamp created;
    private Timestamp updates;
    private boolean enabled;

}