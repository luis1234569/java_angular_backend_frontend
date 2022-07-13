package yavirac.ticket.feature.ticket;

import java.sql.Time;
import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("tstickets")
public class Tsticket {

    @Id
    @Column("tsticket_id")
    private long tsticketId;
    private String name;
    private String dni;
    private Timestamp created;
    private Timestamp updated;
    private boolean enabled;
    
}
