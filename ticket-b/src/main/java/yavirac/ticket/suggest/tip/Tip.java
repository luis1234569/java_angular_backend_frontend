package yavirac.ticket.suggest.tip;

// import java.util.HashSet;
// import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
// import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;
// import yavirac.ticket.feature.ticket.TicketTip;

@Data
@Table("tips")
public class Tip {
    @Id
    @Column("tip_id")
    private long id;
    private String name;

    // @MappedCollection(idColumn = "tip_id")
    // private Set<TicketTip> tips = new HashSet<>();
}
