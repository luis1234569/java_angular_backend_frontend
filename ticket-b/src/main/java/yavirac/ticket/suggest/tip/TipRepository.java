package yavirac.ticket.suggest.tip;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface TipRepository extends CrudRepository<Tip, Long> {

    List<Tip> findByNameLikeIgnoreCase(String term);
    
}
