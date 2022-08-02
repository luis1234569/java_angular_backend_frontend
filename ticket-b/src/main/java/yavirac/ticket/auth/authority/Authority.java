package yavirac.ticket.auth.authority;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("persons")
class Authority {
    @Id
    @Column("person_id")
    private long personId;
    private String name;
}