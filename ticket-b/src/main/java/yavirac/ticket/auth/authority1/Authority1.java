package yavirac.ticket.auth.authority1;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table ("authority1")
public class Authority1 {
    @Id
    @Column ("id")
    private long id;
    private String name;
}


