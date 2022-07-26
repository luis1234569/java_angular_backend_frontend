package yavirac.ticket.feature.career;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("carreras")
public class Career {

    @Id
    @Column("carrera_id")
    private long id;
    private String name;
    
}
