package yavirac.ticket.feature.Needs;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("needs")
public class Need {

    @Id
    @Column("necesidad_id")
    private long necesidadId;
    private String tipo;
    
}
