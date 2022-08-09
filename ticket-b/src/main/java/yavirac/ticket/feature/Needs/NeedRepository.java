package yavirac.ticket.feature.Needs;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface NeedRepository extends CrudRepository<Need, Long> {

    List<Need> findAll();
    
}
