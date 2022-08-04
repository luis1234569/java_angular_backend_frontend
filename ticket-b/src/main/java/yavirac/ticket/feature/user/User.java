package yavirac.ticket.feature.user;
<<<<<<< HEAD
=======

>>>>>>> 8ac171173bf6a0286c07674bde7bcbfc519fe517
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("userss")
public class User {

    @Id
<<<<<<< HEAD
    @Column
    private long personId; 
=======
    @Column("person_id")
    private long personId;
>>>>>>> 8ac171173bf6a0286c07674bde7bcbfc519fe517
    private String name;
    
    private String mail ;
    private String login;
    private String contra ;
    private String rol;
    private boolean enabled;
    private Timestamp created;
    private Timestamp updated;
<<<<<<< HEAD
    private Long carreraId;

    @MappedCollection(idColumn = "person_id")
    private Set<UserAuthority1> authorities = new HashSet<>();

=======
    @Column("carrera_id")
    private int carreraId;
>>>>>>> 8ac171173bf6a0286c07674bde7bcbfc519fe517
}
