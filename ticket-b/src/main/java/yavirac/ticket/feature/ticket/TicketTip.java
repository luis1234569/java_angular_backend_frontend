package yavirac.ticket.feature.ticket;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data 
@Table("ticket_tip")
public class TicketTip {
    @Id
    @Column("tickettip_id")
    private long id;
    @Column("ticket_id")
    private long ticketId;
    @Column("tip_id")
    private long tipId;

    
}
