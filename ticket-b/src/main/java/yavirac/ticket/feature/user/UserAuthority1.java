package yavirac.ticket.feature.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table ("user_authority1")
public class UserAuthority1 {
    
    
    @Id private long id;
    @Column ("person_id")
    private Long personId;
    @Column ("authority1_id")
    private Long authority1Id;

}