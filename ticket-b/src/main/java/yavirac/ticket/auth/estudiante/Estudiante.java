package yavirac.ticket.auth.estudiante;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("users")
class Estudiante {
    @Id
    @Column("person_id")
    private long personId;
    private String name;
}