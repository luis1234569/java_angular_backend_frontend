package yavirac.ticket.auth.authority1;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Authority1 {
    @Id
    private long id;
    private String name;
}


