package yavirac.ticket.feature.tkrespuesta;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;


import lombok.Data;

@Data
@Table("tkrespuestas")
public class Tkrespuesta {

    @Id
    @Column("tkrespuesta_id")
    private long tkrespuestaId;
    private String comment;
    private Boolean yesno;
    private Timestamp datecreate;
    private Timestamp dateupdate;
    private Long needId;

    @MappedCollection(idColumn = "tkrespuesta_id")
    private Set<TkrespuestaAuthority> authorities = new HashSet<>();
}
