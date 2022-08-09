package yavirac.ticket.feature.tkrespuesta;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class TkrespuestaAuthority {

    @Id private long id;
    private long tkrespuestaId;
    private long authorityId; 
    
}
