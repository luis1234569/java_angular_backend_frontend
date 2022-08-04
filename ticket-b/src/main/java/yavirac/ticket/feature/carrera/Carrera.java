package yavirac.ticket.feature.carrera;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("carrera")
public class Carrera {
    @Id
    @Column("carrera_id")
    private long carreraId;
    private String name;
    private Timestamp created;
    private Timestamp updated;
    private Boolean enable;
    private Boolean archived;
    @Column("person_id")
    private Long personId;
    @MappedCollection(idColumn = "carrera_id")
    private Set<CarreraEstudiantes> carreraEstudiante= new HashSet<>();
}
