package yavirac.ticket.feature.ticket;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
// import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("ticketss")
public class Ticket {

    @Id
    private long ticketId;
    // private String name;
    // @Column("carrera")
    // private long carreraId;
    private Long userId;
    private String modulo;
    private String motivo;
    private String descripcion;
    private String telefono;
    private Timestamp created;
    // private Timestamp updates;
    private boolean enabled;

    @MappedCollection(idColumn = "ticket_id")
    private Set<TicketTip> tips = new HashSet<>();

}