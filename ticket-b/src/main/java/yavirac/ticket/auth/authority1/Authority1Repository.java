package yavirac.ticket.auth.authority1;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface Authority1Repository extends CrudRepository<Authority1, Long>{

    List<Authority1> findByNameLikeIgnoreCase(String term);
    
}
