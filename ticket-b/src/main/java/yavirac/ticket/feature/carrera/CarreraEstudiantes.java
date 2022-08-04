package yavirac.ticket.feature.carrera;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("carrera_estudiantes")
public class CarreraEstudiantes {
    @Id
    @Column("estudiante_id")
    private long estudianteId;
    @Column("carrera_id")
    private Long carreraId;
    @Column("person_id")
    private Long personId;
}
