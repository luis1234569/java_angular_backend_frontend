package yavirac.ticket.feature.user;


import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("users")
public class User {

    @Id
    @Column("person_id")
    private long personId; 
    private String name;
    private String mail ;
    private String login;
    private String contra ;
    private String rol;
    private boolean enabled;
    private Timestamp created;
    private Timestamp updated;

}
