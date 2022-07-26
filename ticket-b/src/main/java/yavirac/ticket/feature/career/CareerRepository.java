package yavirac.ticket.feature.career;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CareerRepository extends CrudRepository<Career, Long> {
    
    List<Career> findAll();
    
}
