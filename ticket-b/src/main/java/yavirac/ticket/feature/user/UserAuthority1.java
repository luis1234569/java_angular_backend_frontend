package yavirac.ticket.feature.user;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class UserAuthority1 {
    
    @Id private long id;
    private Long personId;
    private Long authority1Id;

}