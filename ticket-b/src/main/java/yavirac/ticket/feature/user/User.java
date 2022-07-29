package yavirac.ticket.feature.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("users")
public class User {

    @Id
    @Column("user_id")
    private long id;
    private String name;
    
}
