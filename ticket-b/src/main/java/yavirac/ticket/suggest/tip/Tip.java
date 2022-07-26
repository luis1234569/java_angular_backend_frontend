package yavirac.ticket.suggest.tip;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("tips")
public class Tip {
    @Id
    @Column(("tip_id"))
    private long id;
    private String name;
}
