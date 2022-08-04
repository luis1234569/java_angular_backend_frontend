package yavirac.ticket.feature.user;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("users")
public class User {

    @Id
    @Column
    private long personId; 
    private String name;
    
    private String mail ;
    private String login;
    private String contra ;
    private String rol;
    private boolean enabled;
    private Timestamp created;
    private Timestamp updated;
    private Long carreraId;

    @MappedCollection(idColumn = "person_id")
    private Set<UserAuthority1> authorities = new HashSet<>();

}
