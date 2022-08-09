package yavirac.ticket.feature.tkrespuesta;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


public interface TkrespuestaRepository extends CrudRepository<Tkrespuesta, Long> {

    List<Tkrespuesta> findAll();
    List<Tkrespuesta> findByCommentLikeIgnoreCase(String term);
}
